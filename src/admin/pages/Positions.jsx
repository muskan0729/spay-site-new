import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useGet } from "../../hooks/useGet";
import { usePost } from "../../hooks/usePost";
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";

const Positions = () => {
  // Local state for UI
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [previewJob, setPreviewJob] = useState(null);
  const [newDepartment, setNewDepartment] = useState("");

  // Filter and search state
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Job form state
  const [jobForm, setJobForm] = useState({
    name: "",
    department_id: "",
    location: "",
    job_type: "",
    experience: "",
    salary_range: "",
    skills: "",
    responsibility: "",
    requirements: "",
    status: true,
  });

  // Job types and experience levels
  const jobTypes = [
    "Work From Home",
    "Work From Office",
    "Hybrid",
    "Internship",
  ];

  const experienceLevels = [
    "0-6 months",
    "6-12 months",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6+ years",
  ];

  /* ================= CUSTOM HOOKS ================= */

  // Fetch departments
  const {
    data: departmentsData,
    loading: departmentsLoading,
    error: departmentsError,
    refetch: refetchDepartments,
  } = useGet("/department", { lazy: false });

  // Fetch jobs
  const {
    data: jobsData,
    loading: jobsLoading,
    error: jobsError,
    refetch: refetchJobs,
  } = useGet("/position", { lazy: false });

  // For fetching single job details - we'll create a custom function
  const [jobDetailsLoading, setJobDetailsLoading] = useState(false);

  // Post hooks
  const { post: createDepartment, loading: creatingDepartment } =
    usePost("/store_dep");

  const { post: createJob, loading: creatingJob } = usePost("/store_position");

  // Put/Patch hooks
  const { put: updateJob, loading: updatingJob } = usePut("/position");

  const { patch: toggleStatus, loading: togglingStatus } = usePut("/positions"); // For toggle-status endpoint

  // Delete hooks
  const { remove: deleteDepartment, loading: deletingDepartment } =
    useDelete("/Department_delete");

  const { remove: deleteJob, loading: deletingJob } =
    useDelete("/position_delete");

  /* ================= PROCESS DATA ================= */

  // Transform departments data
  const departments = useMemo(() => {
    if (departmentsData?.data) {
      return departmentsData.data.map((dep) => ({
        id: dep.id,
        name: dep.name,
      }));
    }
    return [];
  }, [departmentsData]);

  // Transform jobs data
  const jobs = useMemo(() => {
    if (jobsData?.data) {
      // return jobsData.data.map((job) => ({
      //   id: job.id,
      //   title: job.name,
      //   department: job.department?.name || "",
      //   department_id: job.department_id,
      //   description: job.requirements?.join("\n") || "",
      //   status: job.status,
      //   created_at:
      //     job.created_at?.split("T")[0] ||
      //     new Date().toISOString().split("T")[0],
      //   location: job.location,
      //   salary: job.salary_range,
      //   experience: job.experience,
      //   type: job.job_type,
      //   skills: job.skills?.join(", ") || "",
      //   applications: job.applications_count, // This might come from a different endpoint
      // }));

      return jobsData.data.map((job) => ({
        id: job.id,
        title: job.name,
        department: job.department?.name || "",
        department_id: job.department_id,

        responsibility: job.responsibility || [],
        requirements: job.requirements || [],

        status: job.status,
        created_at:
          job.created_at?.split("T")[0] ||
          new Date().toISOString().split("T")[0],

        location: job.location,
        salary: job.salary_range,
        experience: job.experience,
        type: job.job_type,
        skills: job.skills?.join(", ") || "",
        applications: job.applications_count,
      }));
    }
    return [];
  }, [jobsData]);

  // Combined loading state
  const loading =
    departmentsLoading ||
    jobsLoading ||
    creatingDepartment ||
    creatingJob ||
    updatingJob ||
    deletingDepartment ||
    deletingJob ||
    jobDetailsLoading ||
    togglingStatus;

  // Combined error state
  const error = departmentsError || jobsError;

  /* ================= FILTER & SORT ================= */
  const filteredJobs = useMemo(() => {
    let filtered = jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        filterStatus === "all" || job.status === filterStatus;

      const matchesDepartment =
        filterDepartment === "all" || job.department === filterDepartment;

      return matchesSearch && matchesStatus && matchesDepartment;
    });

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else {
      filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }

    return filtered;
  }, [jobs, search, filterStatus, filterDepartment, sortBy]);

  /* ================= API FUNCTIONS ================= */

  // Custom function to fetch job details by ID
  const fetchJobDetails = async (id) => {
    setJobDetailsLoading(true);
    try {
      // Using fetch directly since your useGet hook might not support dynamic IDs
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/positions/${id}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            Accept: "application/json",
          },
        },
      );
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error fetching job details:", error);
      return { success: false, error: error.message };
    } finally {
      setJobDetailsLoading(false);
    }
  };

  /* ================= DEPARTMENT MANAGEMENT ================= */
  const handleAddDepartment = async () => {
    if (!newDepartment) return;

    // Check if department already exists (case insensitive)
    const exists = departments.some(
      (d) => d.name.toLowerCase() === newDepartment.toLowerCase(),
    );

    if (exists) {
      alert("Department already exists");
      return;
    }

    const result = await createDepartment({ name: newDepartment });
    if (result.success) {
      await refetchDepartments();
      setNewDepartment("");
    } else {
      alert(result.error);
    }
  };

  const handleDeleteDepartment = async (id, departmentName) => {
    // Check if department is used in any job
    const used = jobs.some((job) => job.department === departmentName);
    if (used) {
      alert("Department is assigned to a job.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this department?"))
      return;

    const result = await deleteDepartment(id);
    if (result.success) {
      await refetchDepartments();
    } else {
      alert(result.error);
    }
  };

  /* ================= JOB MANAGEMENT ================= */
  const handleSaveJob = async () => {
    if (!jobForm.name || !jobForm.department_id) {
      alert("Title & Department required");
      return;
    }

    // Transform form data to API format
    const jobData = {
      name: jobForm.name,
      department_id: parseInt(jobForm.department_id),
      location: jobForm.location,
      job_type: jobForm.job_type,
      experience: jobForm.experience,
      salary_range: jobForm.salary_range,
      skills: jobForm.skills.split(",").map((s) => s.trim()),
      responsibility: jobForm.responsibility
        .split("\n")
        .filter((line) => line.trim()),
      requirements: jobForm.requirements
        .split("\n")
        .filter((line) => line.trim()),
      status: jobForm.status,
    };

    let result;
    if (editingJob) {
      // Update existing job
      result = await updateJob(editingJob.id, jobData);
    } else {
      // Create new job
      result = await createJob(jobData);
    }

    if (result.success) {
      await refetchJobs();
      resetModal();
    } else {
      alert(result.error);
    }
  };

  const handleToggleStatus = async (id) => {
    const result = await toggleStatus(`${id}/toggle-status`, {}); // Correct endpoint: /positions/{id}/toggle-status
    if (result.success) {
      await refetchJobs();
    } else {
      alert("Failed to toggle status");
    }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;

    const result = await deleteJob(id);
    if (result.success) {
      await refetchJobs();
    } else {
      alert(result.error);
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      name: job.title,
      department_id: job.department_id || "",
      location: job.location || "",
      job_type: job.type || "",
      experience: job.experience || "",
      salary_range: job.salary || "",
      skills: job.skills || "",
      // responsibility: job.description || "", // Convert to string for editing
      // requirements: job.description || "", // Convert to string for editing
      responsibility: Array.isArray(job.responsibility)
        ? job.responsibility.join("\n")
        : "",

      requirements: Array.isArray(job.requirements)
        ? job.requirements.join("\n")
        : "",
      status: job.status === "active",
    });
    setShowModal(true);
  };

  const handleViewJob = async (id) => {
    const result = await fetchJobDetails(id);
    if (result.success && result.data?.data) {
      const job = result.data.data;
      setPreviewJob({
        id: job.id,
        title: job.name,
        department: job.department?.name || "",
        location: job.location,
        salary: job.salary_range,
        experience: job.experience,
        type: job.job_type,
        responsibility: job.responsibility || [],
        requirements: job.requirements || [],
        skills: job.skills?.join(", ") || "",
      });
    } else {
      alert("Failed to load job details");
    }
  };

  const handleDuplicateJob = async (job) => {
    const jobData = {
      name: job.title + " (Copy)",
      department_id: job.department_id,
      location: job.location,
      job_type: job.type,
      experience: job.experience,
      salary_range: job.salary,
      skills: job.skills.split(",").map((s) => s.trim()),
      // responsibility: job.description.split("\n").filter((line) => line.trim()),
      // requirements: job.description.split("\n").filter((line) => line.trim()),
      responsibility: job.responsibility,
      requirements: job.requirements,
      status: true,
    };

    const result = await createJob(jobData);
    if (result.success) {
      await refetchJobs();
    } else {
      alert("Failed to duplicate job");
    }
  };

  const resetModal = () => {
    setJobForm({
      name: "",
      department_id: "",
      location: "",
      job_type: "",
      experience: "",
      salary_range: "",
      skills: "",
      responsibility: "",
      requirements: "",
      status: true,
    });
    setEditingJob(null);
    setShowModal(false);
  };

  /* ================= RENDER ================= */
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header with loading state */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Job Roles Management
          </h2>
          {loading && <span className="text-blue-600">Loading...</span>}
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Manage Departments Section */}
        <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Manage Departments
          </h3>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <input
              type="text"
              placeholder="Enter department name..."
              className="w-full md:w-80 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={newDepartment}
              onChange={(e) => setNewDepartment(e.target.value)}
            />

            <button
              onClick={handleAddDepartment}
              disabled={loading}
              className="px-5 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Add Department
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {departments.map((dep) => (
              <div
                key={dep.id}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
              >
                {dep.name}
                <button
                  onClick={() => handleDeleteDepartment(dep.id, dep.name)}
                  disabled={loading}
                  className="text-red-600 hover:text-red-800 font-bold text-base leading-none disabled:opacity-50"
                  title="Remove department"
                >
                  ×
                </button>
              </div>
            ))}
            {departments.length === 0 && (
              <p className="text-gray-500 text-sm italic">
                No departments added yet
              </p>
            )}
          </div>
        </div>

        {/* Filters & Create Button */}
        {/* Filters & Create Button */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6 space-y-6">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="w-full lg:w-2/5">
              <input
                type="text"
                placeholder="Search job roles..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Create Job Button */}
            <button
              onClick={() => setShowModal(true)}
              disabled={loading}
              className="self-start lg:self-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50"
            >
              + Create Job
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <select
              className="min-w-[160px] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <select
              className="min-w-[200px] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              {departments.map((dep) => (
                <option key={dep.id} value={dep.name}>
                  {dep.name}
                </option>
              ))}
            </select>

            <select
              className="min-w-[160px] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Jobs Table */}
        <div className="mb-4 text-sm text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-800">
            {filteredJobs.length}
          </span>{" "}
          job(s)
        </div>
        <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
                  <th className="p-4">Title</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Applications</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Created</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading && filteredJobs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-500">
                      Loading jobs...
                    </td>
                  </tr>
                ) : filteredJobs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-500">
                      No jobs found matching your filters
                    </td>
                  </tr>
                ) : (
                  filteredJobs.map((job) => (
                    <tr
                      key={job.id}
                      className="hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {job.title}
                      </td>
                      <td className="p-4 text-gray-600">{job.department}</td>
                      <td className="p-4 text-gray-600">{job.applications}</td>
                      <td className="p-4">
                        <span
                          className={`
      inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full
      shadow-sm border border-transparent
      ${
        job.status === "active"
          ? "bg-green-50 text-green-800 border-green-200"
          : "bg-red-50 text-red-800 border-red-200"
      }
    `}
                        >
                          <span
                            className={`
        flex h-2 w-2 rounded-full
        ${job.status === "active" ? "bg-green-500" : "bg-red-500"}
      `}
                          />
                          {job.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{job.created_at}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap justify-end gap-2">
                          <button
                            onClick={() => handleViewJob(job.id)}
                            disabled={loading}
                            className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition disabled:opacity-50"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleToggleStatus(job.id)}
                            disabled={loading || togglingStatus}
                            className={`
    inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium rounded-lg
    transition-all duration-200 shadow-sm
    disabled:opacity-50 disabled:cursor-not-allowed
    ${
      job.status === "active"
        ? "bg-green-600/90 hover:bg-green-700 text-white"
        : "bg-red-600/90 hover:bg-red-700 text-white"
    }
  `}
                          >
                            <span className="relative flex h-2.5 w-2.5">
                              <span
                                className={`
        animate-ping absolute inline-flex h-full w-full rounded-full opacity-70
        ${job.status === "active" ? "bg-green-300" : "bg-red-300"}
      `}
                              />
                              <span
                                className={`
        relative inline-flex rounded-full h-2.5 w-2.5
        ${job.status === "active" ? "bg-green-500" : "bg-red-500"}
      `}
                              />
                            </span>
                            {job.status === "active" ? "Active" : "Inactive"}
                          </button>
                          <button
                            onClick={() => handleEditJob(job)}
                            disabled={loading}
                            className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            disabled={loading}
                            className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create/Edit Job Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-xl font-bold text-gray-800">
                  {editingJob ? "Edit Job" : "Create Job"}
                </h3>
                <button
                  onClick={resetModal}
                  className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-5">
                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.name}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, name: e.target.value })
                    }
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.location}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, location: e.target.value })
                    }
                  />
                </div>

                {/* Salary Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 6-10 LPA"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.salary_range}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, salary_range: e.target.value })
                    }
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="React, JavaScript, Tailwind"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.skills}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, skills: e.target.value })
                    }
                  />
                </div>

                {/* Department Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    value={jobForm.department_id}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, department_id: e.target.value })
                    }
                  >
                    <option value="">Select Department</option>
                    {departments.map((dep) => (
                      <option key={dep.id} value={dep.id}>
                        {dep.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Experience Required
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    value={jobForm.experience}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, experience: e.target.value })
                    }
                  >
                    <option value="">Select Experience Level</option>
                    {experienceLevels.map((level, i) => (
                      <option key={i} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    value={jobForm.job_type}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, job_type: e.target.value })
                    }
                  >
                    <option value="">Select Job Type</option>
                    {jobTypes.map((type, i) => (
                      <option key={i} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Responsibilities (one per line)
                  </label>
                  <textarea
                    placeholder="List responsibilities (one per line)..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.responsibility}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, responsibility: e.target.value })
                    }
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements (one per line)
                  </label>
                  <textarea
                    placeholder="List requirements (one per line)..."
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm.requirements}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, requirements: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="p-6 border-t flex justify-end gap-3 sticky bottom-0 bg-white">
                <button
                  onClick={resetModal}
                  disabled={loading}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveJob}
                  disabled={loading}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Job"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Job Preview Modal */}
        {previewJob && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-xl font-bold text-gray-800">
                  {previewJob.title}
                </h3>
                <button
                  onClick={() => setPreviewJob(null)}
                  className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="p-6 space-y-4">
                <p>
                  <strong className="text-gray-700">Department:</strong>{" "}
                  {previewJob.department}
                </p>
                <p>
                  <strong className="text-gray-700">Location:</strong>{" "}
                  {previewJob.location}
                </p>
                <p>
                  <strong className="text-gray-700">Salary:</strong>{" "}
                  {previewJob.salary}
                </p>
                <p>
                  <strong className="text-gray-700">Minimum Experience:</strong>{" "}
                  {previewJob.experience || "Not specified"}
                </p>
                <p>
                  <strong className="text-gray-700">Job Type:</strong>{" "}
                  {previewJob.type || "Not specified"}
                </p>
                <p>
                  <strong className="text-gray-700">Skills:</strong>{" "}
                  {previewJob.skills}
                </p>
                {/* <div className="mt-4">
                  <strong className="text-gray-700 block mb-1">
                    Description:
                  </strong>
                  <p className="whitespace-pre-wrap text-gray-600">
                    {previewJob.description}
                  </p>
                </div> */}
                <div className="mt-4">
                  <strong>Responsibilities:</strong>

                  <ul className="list-disc ml-5">
                    {previewJob.responsibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <strong>Requirements:</strong>

                  <ul className="list-disc ml-5">
                    {previewJob.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t text-right">
                <button
                  onClick={() => setPreviewJob(null)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Positions;
