
import React, { useState, useEffect, useCallback } from "react";
import { useGet } from "../../hooks/useGet";
import { useInterviews } from "../../hooks/useInterviews";
import { apiClient } from "../../hooks/useApi"; // Import apiClient for direct calls

const Candidates = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [scheduleModal, setScheduleModal] = useState(null);
  const [emailModal, setEmailModal] = useState(null);
  const [interviewData, setInterviewData] = useState({
    date: "",
    time: "",
  });
  const [emailData, setEmailData] = useState({
    subject: "",
    message: "",
  });
  const [filters, setFilters] = useState({
    status: "",
    search: ""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [actionLoading, setActionLoading] = useState(false);

  // Get base URL from environment or use default
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

  // API Endpoints
  const CANDIDATES_URL = '/admin/candidates';

  // ============= GET CANDIDATES =============
  const { 
    data: candidatesData, 
    loading, 
    error: fetchError,
    refetch: refetchCandidates 
  } = useGet(CANDIDATES_URL, {
    params: {
      page: currentPage,
      status: filters.status || undefined,
      search: filters.search || undefined
    }
  });

  // Integrate useInterviews for scheduling
  const { createInterview, creating } = useInterviews();

  // Extract candidates from the nested data structure
  const candidates = candidatesData?.data?.data || [];
  
  // Extract pagination info from the response
  const pagination = candidatesData?.data || {
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
    from: 0,
    to: 0
  };

  // Handle fetch error
  useEffect(() => {
    if (fetchError) {
      alert(`Failed to fetch candidates: ${fetchError}`);
    }
  }, [fetchError]);

  /* ================= STATUS UPDATE ================= */
  const updateStatus = async (id, newStatus) => {
    setActionLoading(true);
    try {
      const endpoint = newStatus === 'accepted' ? 'accept' : 'reject';
      const url = `/admin/candidates/${id}/${endpoint}`;
      
      console.log(`Making POST request to: ${url}`);
      console.log(`Full URL: ${API_BASE_URL}${url}`);
      
      // Make direct API call using apiClient
      const response = await apiClient.post(url);
      
      console.log("Response:", response.data);

      if (response.data?.status) {
        await refetchCandidates();
        alert(`Candidate ${newStatus} successfully`);
      } else {
        alert(`Failed to ${newStatus} candidate: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        alert(`Server error: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response from server. Please check if the backend is running.");
      } else {
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= BULK OPERATIONS ================= */
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const bulkReject = async () => {
    if (selectedIds.length === 0) return;

    setActionLoading(true);
    try {
      const url = '/admin/candidates/bulk-reject';
      
      console.log(`Making POST request to: ${url}`);
      console.log("Payload:", { ids: selectedIds });
      
      const response = await apiClient.post(url, { ids: selectedIds });
      
      console.log("Response:", response.data);

      if (response.data?.status) {
        await refetchCandidates();
        setSelectedIds([]);
        alert('Selected candidates rejected successfully');
      } else {
        alert(`Failed to reject candidates: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error in bulk reject:", error);
      
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        alert(`Server error: ${error.response.status} - ${error.response.data?.message || error.response.statusText}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response from server. Please check if the backend is running.");
      } else {
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= SCHEDULE INTERVIEW ================= */
  const scheduleInterview = async () => {
    if (!interviewData.date || !interviewData.time) {
      return alert("Please select both date and time");
    }

    setActionLoading(true);

    try {
      const response = await apiClient.post("/interviews", {
        candidate_id: scheduleModal.id,
        date: interviewData.date,
        start_time: interviewData.time,
        end_time: interviewData.time, // or add +1 hour if needed
        type: "in_person", // or "online"
      });

      alert("Interview scheduled successfully");

      setScheduleModal(null);
      setInterviewData({ date: "", time: "" });

    } catch (error) {
      console.error(error);
      alert("Failed to schedule interview");
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= EMAIL ================= */
  const sendEmail = async (candidate) => {
    setActionLoading(true);
    try {
      const url = `/admin/candidates/${candidate.id}/email`;
      
      console.log(`Making POST request to: ${url}`);
      console.log("Payload:", {
        subject: emailData.subject,
        message: emailData.message
      });
      
      const response = await apiClient.post(url, {
        subject: emailData.subject,
        message: emailData.message
      });
      
      console.log("Response:", response.data);

      if (response.data?.status) {
        alert('Email sent successfully');
        setEmailModal(null);
        setEmailData({ subject: "", message: "" });
      } else {
        alert(`Failed to send email: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setActionLoading(false);
    }
  };

  /* ================= RESUME HANDLING ================= */
  const previewResumeHandler = (candidate) => {
    if (!hasResume(candidate)) {
      alert('No resume available for this candidate');
      return;
    }
    
    const previewUrl = `${API_BASE_URL}/admin/candidates/${candidate.id}/resume/preview`;
    console.log('Preview URL:', previewUrl);
    window.open(previewUrl, '_blank');
  };

  const downloadResume = (candidate) => {
    if (!hasResume(candidate)) {
      alert('No resume available for this candidate');
      return;
    }
    
    const downloadUrl = `${API_BASE_URL}/admin/candidates/${candidate.id}/resume/download`;
    console.log('Download URL:', downloadUrl);
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ================= EXPORT CSV ================= */
  const exportCSV = () => {
    const headers = "ID,Name,Email,Phone,Position,Status,Applied Date\n";

    const rows = candidates
      .map(
        (c) =>
          `${c.id},${c.name},${c.email},${c.mobile_no || ''},${c.position?.name || 'N/A'},${c.status},${c.created_at?.split('T')[0] || ''}`
      )
      .join("\n");

    const blob = new Blob([headers + rows], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `candidates_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle filter changes
  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  }, []);

  // Search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filters.search !== undefined) {
        refetchCandidates();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.search, refetchCandidates]);

  // Refetch when filters change
  useEffect(() => {
    refetchCandidates();
  }, [filters.status, currentPage, refetchCandidates]);

  const isLoading = loading || actionLoading || creating;

  // Helper function to get position name safely
  const getPositionName = (candidate) => {
    return candidate.position?.name || 'N/A';
  };

  // Helper function to check if resume exists
  const hasResume = (candidate) => {
    return candidate.resume && candidate.resume !== null && candidate.resume !== '';
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header + Top Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Candidates Management
          </h2>

          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button
              onClick={bulkReject}
              disabled={selectedIds.length === 0 || isLoading}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                selectedIds.length === 0 || isLoading
                  ? "bg-pink-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              Bulk Reject {selectedIds.length > 0 && `(${selectedIds.length})`}
            </button>

            <button
              onClick={exportCSV}
              className="flex-1 sm:flex-none px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search by name or email..."
              value={filters.search}
              onChange={handleFilterChange}
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
          </div>
          <div>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden w-full">
          {loading ? (
            <div className="p-8 sm:p-12 text-center text-gray-500">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              Loading candidates...
            </div>
          ) : candidates.length === 0 ? (
            <div className="p-8 sm:p-12 text-center text-gray-500">
              No candidates found
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-xs sm:text-sm uppercase tracking-wider">
                      <th className="p-2 sm:p-4 w-10"></th>
                      <th className="p-2 sm:p-4">Name</th>
                      <th className="p-2 sm:p-4">Email</th>
                      <th className="p-2 sm:p-4">Phone</th>
                      <th className="p-2 sm:p-4">Position</th>
                      <th className="p-2 sm:p-4">Resume</th>
                      <th className="p-2 sm:p-4">Status</th>
                      <th className="p-2 sm:p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {candidates.map((c) => {
                      const isRejected = c.status === "rejected";
                      const isAccepted = c.status === "accepted";

                      return (
                        <tr
                          key={c.id}
                          className="hover:bg-blue-50/40 transition-colors"
                        >
                          <td className="p-2 sm:p-4">
                            <input
                              type="checkbox"
                              checked={selectedIds.includes(c.id)}
                              onChange={() => toggleSelect(c.id)}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              disabled={isLoading || isRejected}
                            />
                          </td>

                          <td className="p-2 sm:p-4 font-medium text-gray-900 text-sm sm:text-base">{c.name}</td>
                          <td className="p-2 sm:p-4 text-gray-600 text-sm sm:text-base">{c.email}</td>
                          <td className="p-2 sm:p-4 text-gray-600 text-sm sm:text-base">{c.mobile_no || '-'}</td>
                          
                          <td className="p-2 sm:p-4 text-gray-600 text-sm sm:text-base">
                            {getPositionName(c)}
                          </td>

                          <td className="p-2 sm:p-4">
                            {hasResume(c) ? (
                              <div className="flex flex-wrap gap-2">
                                <button
                                  onClick={() => previewResumeHandler(c)}
                                  className="px-2 sm:px-3 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-md hover:bg-blue-700 transition"
                                  disabled={isLoading}
                                >
                                  Preview
                                </button>
                                <button
                                  onClick={() => downloadResume(c)}
                                  className="px-2 sm:px-3 py-1 bg-gray-600 text-white text-xs sm:text-sm rounded-md hover:bg-gray-700 transition"
                                  disabled={isLoading}
                                >
                                  Download
                                </button>
                              </div>
                            ) : (
                              <span className="text-gray-400 text-xs sm:text-sm">No resume</span>
                            )}
                          </td>

                          <td className="p-2 sm:p-4">
                            <span
                              className={`inline-flex px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                                c.status
                              )}`}
                            >
                              {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                            </span>
                          </td>

                          <td className="p-2 sm:p-4">
                            <div className="flex flex-wrap justify-end gap-1 sm:gap-2">

                              {/* Email */}
                              <button
                                onClick={() => {
                                  if (isRejected) return;
                                  setEmailModal(c);
                                  setEmailData({
                                    subject: `Interview Update - ${getPositionName(c)}`,
                                    message: `Hello ${c.name},\n\n`,
                                  });
                                }}
                                className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded-md transition ${
                                  isRejected
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-indigo-600 hover:bg-indigo-700"
                                }`}
                                disabled={isLoading || isRejected}
                              >
                                Email
                              </button>

                              {/* Schedule */}
                              <button
                                onClick={() => {
                                  if (isRejected) return;
                                  setScheduleModal(c);
                                }}
                                className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded-md transition ${
                                  isRejected
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                                disabled={isLoading || isRejected}
                              >
                                Schedule
                              </button>

                              {/* Accept */}
                              <button
                                onClick={() => updateStatus(c.id, "accepted")}
                                className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded-md transition ${
                                  isRejected || isAccepted
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                                disabled={isLoading || isRejected || isAccepted}
                              >
                                Accept
                              </button>

                              {/* Reject */}
                              <button
                                onClick={() => updateStatus(c.id, "rejected")}
                                className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded-md transition ${
                                  isRejected
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-700"
                                }`}
                                disabled={isLoading || isRejected}
                              >
                                Reject
                              </button>

                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {pagination.last_page > 1 && (
                <div className="px-2 sm:px-4 py-3 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
                  <div className="text-gray-700">
                    Showing {pagination.from} to {pagination.to} of {pagination.total} candidates
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePageChange(pagination.current_page - 1)}
                      disabled={pagination.current_page === 1 || isLoading}
                      className="px-2 sm:px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <span className="px-2 sm:px-3 py-1">
                      Page {pagination.current_page} of {pagination.last_page}
                    </span>
                    <button
                      onClick={() => handlePageChange(pagination.current_page + 1)}
                      disabled={pagination.current_page === pagination.last_page || isLoading}
                      className="px-2 sm:px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Schedule Interview Modal */}
        {scheduleModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md">
              <div className="p-4 sm:p-6 border-b">
                <h3 className="text-base sm:text-lg font-bold">
                  Schedule Interview – {scheduleModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Position: {getPositionName(scheduleModal)}
                </p>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={interviewData.date}
                    onChange={(e) =>
                      setInterviewData({ ...interviewData, date: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full border rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={interviewData.time}
                    onChange={(e) =>
                      setInterviewData({ ...interviewData, time: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6 border-t flex justify-end gap-3">
                <button
                  onClick={() => {
                    setScheduleModal(null);
                    setInterviewData({ date: "", time: "" });
                  }}
                  className="px-3 sm:px-5 py-1 sm:py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-xs sm:text-sm"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={scheduleInterview}
                  className="px-3 sm:px-5 py-1 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm"
                  disabled={isLoading}
                >
                  {actionLoading ? 'Scheduling...' : 'Confirm Schedule'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Email Modal */}
        {emailModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg">
              <div className="p-4 sm:p-6 border-b">
                <h3 className="text-base sm:text-lg font-bold">
                  Send Email to {emailModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Position: {getPositionName(emailModal)}
                </p>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={emailData.subject}
                    onChange={(e) =>
                      setEmailData({ ...emailData, subject: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full border rounded-lg px-2 sm:px-3 py-1 sm:py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={emailData.message}
                    onChange={(e) =>
                      setEmailData({ ...emailData, message: e.target.value })
                    }
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6 border-t flex justify-end gap-3">
                <button
                  onClick={() => {
                    setEmailModal(null);
                    setEmailData({ subject: "", message: "" });
                  }}
                  className="px-3 sm:px-5 py-1 sm:py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 text-xs sm:text-sm"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  onClick={() => sendEmail(emailModal)}
                  className="px-3 sm:px-5 py-1 sm:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-xs sm:text-sm"
                  disabled={isLoading}
                >
                  {actionLoading ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Candidates;
