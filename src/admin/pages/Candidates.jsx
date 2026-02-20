import React, { useEffect, useState } from "react";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [previewResume, setPreviewResume] = useState(null);
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

  /* ================= FETCH ================= */
  // Note: Backend team can replace this with API call, e.g., fetch('/api/candidates').then(res => res.json()).then(setCandidates);
  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    setLoading(true);

    // 🔁 Replace with API
    setCandidates([
      {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "9876543210",
        position: "Frontend Developer",
        resume_url: "https://example.com/resume.pdf",
        status: "pending",
        applied_at: "2026-02-18",
      },
    ]);

    setLoading(false);
  };

  /* ================= STATUS UPDATE ================= */
  // Note: Backend team can integrate API here, e.g., PATCH '/api/candidates/:id' with { status: newStatus }
  const updateStatus = (id, newStatus) => {
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: newStatus } : c
      )
    );
  };

  /* ================= BULK ================= */
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const bulkReject = () => {
    // Note: Backend team can integrate bulk API, e.g., PATCH '/api/candidates/bulk' with { ids: selectedIds, status: 'rejected' }
    setCandidates((prev) =>
      prev.map((c) =>
        selectedIds.includes(c.id)
          ? { ...c, status: "rejected" }
          : c
      )
    );
    setSelectedIds([]);
  };

  /* ================= EXPORT CSV ================= */
  // Note: Backend team can provide API for export if needed, e.g., GET '/api/candidates/export/csv'
  const exportCSV = () => {
    const headers =
      "ID,Name,Email,Phone,Position,Status,Applied Date\n";

    const rows = candidates
      .map(
        (c) =>
          `${c.id},${c.name},${c.email},${c.phone},${c.position},${c.status},${c.applied_at}`
      )
      .join("\n");

    const blob = new Blob([headers + rows], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "candidates.csv";
    a.click();
  };

  /* ================= EMAIL ================= */
  // Note: Backend team can integrate real email sending API, e.g., POST '/api/send-email' with { to: email, subject, body }
  const sendEmail = (candidate) => {
    // This will be replaced by API call in production
    console.log("Sending Email:", {
      to: candidate.email,
      subject: emailData.subject,
      body: emailData.message,
    });
    alert("Email Sent Successfully (Demo - Integrate with backend for real sending)");
    setEmailModal(null);
    setEmailData({ subject: "", message: "" });
  };

  /* ================= SCHEDULE ================= */
  const scheduleInterview = () => {
    if (!interviewData.date || !interviewData.time)
      return alert("Select date & time");

    const message = `
Hello ${scheduleModal.name},

Your interview has been scheduled on 
${interviewData.date} at ${interviewData.time}.

Best regards,
HR Team
`;

    // 🔁 Replace with backend email API, e.g., POST '/api/send-interview-email' with { to: scheduleModal.email, message }
    console.log("Sending Interview Email:", message);

    updateStatus(scheduleModal.id, "interview");

    alert("Interview Scheduled & Email Sent (Demo - Integrate with backend for real sending)");

    setScheduleModal(null);
    setInterviewData({ date: "", time: "" });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      case "interview":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

 return (
  <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
    <div className="max-w-7xl mx-auto">
      {/* Header + Top Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Candidates Management
        </h2>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={bulkReject}
            disabled={selectedIds.length === 0}
            className={`px-4 py-2 rounded-lg font-medium text-white transition-colors ${
              selectedIds.length === 0
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Bulk Reject {selectedIds.length > 0 && `(${selectedIds.length})`}
          </button>

          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Export CSV
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            Loading candidates...
          </div>
        ) : candidates.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No candidates found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                  <th className="p-4 w-10"></th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Position</th>
                  <th className="p-4">Resume</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {candidates.map((c) => (
                  <tr
                    key={c.id}
                    className="hover:bg-blue-50/40 transition-colors"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(c.id)}
                        onChange={() => toggleSelect(c.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>

                    <td className="p-4 font-medium text-gray-900">{c.name}</td>
                    <td className="p-4 text-gray-600">{c.email}</td>
                    <td className="p-4 text-gray-600">{c.position}</td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setPreviewResume(c)}
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                        >
                          Preview
                        </button>
                        <a
                          href={c.resume_url}
                          download
                          className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition"
                        >
                          Download
                        </a>
                      </div>
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
                          c.status
                        )}`}
                      >
                        {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex flex-wrap justify-end gap-2">
                        <button
                          onClick={() => {
                            setEmailModal(c);
                            setEmailData({
                              subject: `Interview Update - ${c.position}`,
                              message: `Hello ${c.name},\n\n`,
                            });
                          }}
                          className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
                        >
                          Email
                        </button>

                        <button
                          onClick={() => setScheduleModal(c)}
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                        >
                          Schedule
                        </button>

                        <button
                          onClick={() => updateStatus(c.id, "accepted")}
                          className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
                        >
                          Accept
                        </button>

                        <button
                          onClick={() => updateStatus(c.id, "rejected")}
                          className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Resume Preview Modal */}
      {previewResume && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {previewResume.name} - Resume
              </h3>
              <button
                onClick={() => setPreviewResume(null)}
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <iframe
                src={previewResume.resume_url}
                title="Resume Preview"
                className="w-full h-full min-h-[500px] border rounded"
              />
            </div>
            <div className="p-4 border-t text-right">
              <button
                onClick={() => setPreviewResume(null)}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Interview Modal */}
      {scheduleModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b">
              <h3 className="text-lg font-bold">
                Schedule Interview – {scheduleModal.name}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={interviewData.date}
                  onChange={(e) =>
                    setInterviewData({ ...interviewData, date: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={interviewData.time}
                  onChange={(e) =>
                    setInterviewData({ ...interviewData, time: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button
                onClick={() => setScheduleModal(null)}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={scheduleInterview}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Modal */}
      {emailModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
            <div className="p-6 border-b">
              <h3 className="text-lg font-bold">
                Send Email to {emailModal.name}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={emailData.subject}
                  onChange={(e) =>
                    setEmailData({ ...emailData, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={emailData.message}
                  onChange={(e) =>
                    setEmailData({ ...emailData, message: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button
                onClick={() => {
                  setEmailModal(null);
                  setEmailData({ subject: "", message: "" });
                }}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => sendEmail(emailModal)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
}

export default Candidates;