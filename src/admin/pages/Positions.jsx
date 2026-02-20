import React, { useEffect, useState } from "react";

const Positions = () => {
  const [jobs, setJobs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [previewJob, setPreviewJob] = useState(null);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const [newDepartment, setNewDepartment] = useState("");

  const jobTypes = [
    "Work From Home",
    "Work From Office",
    "Hybrid",
    "Internship"
  ];

  const experienceLevels = [
    "0-6 months",
    "6-12 months",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6+ years"
  ];

  const [jobForm, setJobForm] = useState({
    title: "",
    department: "",
    description: "",
    status: "active",
    location: "",
    salary: "",
    experience: "",
    type: "",
    deadline: "",
    skills: "",
  });

  /* ================= INITIAL LOAD ================= */
  // Note: Backend team can replace this with API calls, e.g., fetch('/api/departments').then(res => res.json()).then(setDepartments);
  // Similarly for jobs: fetch('/api/jobs').then(res => res.json()).then(setJobs);
  useEffect(() => {
    setDepartments(["Development", "Design"]);

    setJobs([
      {
        id: 1,
        title: "Frontend Developer",
        department: "Development",
        description: "React developer required",
        status: "active",
        created_at: "2026-02-20",
        location: "Remote",
        salary: "6-10 LPA",
        experience: "2-3 years",
        type: "Hybrid",
        deadline: "2026-03-15",
        skills: "React, Tailwind, JavaScript",
        applications: 12,
      },
    ]);
  }, []);

  /* ================= FILTER & SORT ================= */
  let filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || job.status === filterStatus;

    const matchesDepartment =
      filterDepartment === "all" ||
      job.department === filterDepartment;

    return matchesSearch && matchesStatus && matchesDepartment;
  });

  if (sortBy === "newest") {
    filteredJobs.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  } else {
    filteredJobs.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
  }

  /* ================= SAVE JOB ================= */
  // Note: Backend team can integrate API here, e.g., if editingJob, PUT '/api/jobs/:id', else POST '/api/jobs'
  const handleSaveJob = () => {
    if (!jobForm.title || !jobForm.department) {
      alert("Title & Department required");
      return;
    }

    if (editingJob) {
      setJobs((prev) =>
        prev.map((job) =>
          job.id === editingJob.id ? { ...editingJob, ...jobForm } : job
        )
      );
    } else {
      const newJob = {
        id: Date.now(),
        ...jobForm,
        created_at: new Date().toISOString().split("T")[0],
        applications: 0,
      };
      setJobs((prev) => [...prev, newJob]);
    }

    resetModal();
  };

  const resetModal = () => {
    setJobForm({
      title: "",
      department: "",
      description: "",
      status: "active",
      location: "",
      salary: "",
      experience: "",
      type: "",
      deadline: "",
      skills: "",
    });
    setEditingJob(null);
    setShowModal(false);
  };

  /* ================= DEPARTMENT MANAGEMENT ================= */
  // Note: Backend team can integrate API for adding/deleting departments, e.g., POST '/api/departments', DELETE '/api/departments/:name'

  const addDepartment = () => {
    if (!newDepartment) return;
    if (departments.includes(newDepartment)) return;

    setDepartments((prev) => [...prev, newDepartment]);
    setNewDepartment("");
  };

  const deleteDepartment = (dep) => {
    const used = jobs.some((job) => job.department === dep);
    if (used) {
      alert("Department is assigned to a job.");
      return;
    }
    setDepartments((prev) =>
      prev.filter((d) => d !== dep)
    );
  };

  /* ================= OTHER ACTIONS ================= */
  // Note: Backend team can integrate API for these actions, e.g., PATCH '/api/jobs/:id/status', DELETE '/api/jobs/:id', etc.

  const toggleStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              status:
                job.status === "active"
                  ? "inactive"
                  : "active",
            }
          : job
      )
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this job?")) return;
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setJobForm(job);
    setShowModal(true);
  };

  const duplicateJob = (job) => {
    const newJob = {
      ...job,
      id: Date.now(),
      title: job.title + " (Copy)",
    };
    setJobs((prev) => [...prev, newJob]);
  };

  return (
  <div className="p-6 bg-gray-50 min-h-screen text-gray-900">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Job Roles Management
      </h2>

      {/* Manage Departments Section */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Manage Departments
        </h3>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <input
            type="text"
            placeholder="New Department"
            className="flex-1 min-w-[220px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
          />
          <button
            onClick={addDepartment}
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {departments.map((dep, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
            >
              {dep}
              <button
                onClick={() => deleteDepartment(dep)}
                className="text-red-600 hover:text-red-800 font-bold text-base leading-none"
                title="Remove department"
              >
                ×
              </button>
            </div>
          ))}
          {departments.length === 0 && (
            <p className="text-gray-500 text-sm italic">No departments added yet</p>
          )}
        </div>
      </div>

      {/* Filters & Create Button */}
      <div className="bg-white rounded-xl shadow border border-gray-200 p-6 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search job..."
            className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="min-w-[140px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            className="min-w-[160px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((dep, i) => (
              <option key={i} value={dep}>
                {dep}
              </option>
            ))}
          </select>

          <select
            className="min-w-[140px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <button
            onClick={() => setShowModal(true)}
            className="ml-auto px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
          >
            Create Job
          </button>
        </div>
      </div>

      {/* Jobs Table */}
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
              {filteredJobs.length === 0 ? (
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
                    <td className="p-4 font-medium text-gray-900">{job.title}</td>
                    <td className="p-4 text-gray-600">{job.department}</td>
                    <td className="p-4 text-gray-600">{job.applications}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          job.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{job.created_at}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap justify-end gap-2">
                        <button
                          onClick={() => setPreviewJob(job)}
                          className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => toggleStatus(job.id)}
                          className="px-3 py-1.5 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
                        >
                          Toggle
                        </button>
                        <button
                          onClick={() => handleEdit(job)}
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
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
              {[
                { key: "title", label: "Job Title", type: "text" },
                { key: "location", label: "Location", type: "text" },
                { key: "salary", label: "Salary Range", type: "text" },
                { key: "deadline", label: "Application Deadline", type: "date" },
                { key: "skills", label: "Skills (comma separated)", type: "text" },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={label}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={jobForm[key]}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, [key]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  value={jobForm.department}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, department: e.target.value })
                  }
                >
                  <option value="">Select Department</option>
                  {departments.map((dep, i) => (
                    <option key={i} value={dep}>
                      {dep}
                    </option>
                  ))}
                </select>
              </div>

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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  value={jobForm.type}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, type: e.target.value })
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  placeholder="Detailed job description..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={jobForm.description}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, description: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="p-6 border-t flex justify-end gap-3 sticky bottom-0 bg-white">
              <button
                onClick={resetModal}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveJob}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save Job
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
              <p><strong className="text-gray-700">Department:</strong> {previewJob.department}</p>
              <p><strong className="text-gray-700">Location:</strong> {previewJob.location}</p>
              <p><strong className="text-gray-700">Salary:</strong> {previewJob.salary}</p>
              <p><strong className="text-gray-700">Minimum Experience:</strong> {previewJob.experience || "Not specified"}</p>
              <p><strong className="text-gray-700">Job Type:</strong> {previewJob.type || "Not specified"}</p>
              <p><strong className="text-gray-700">Deadline:</strong> {previewJob.deadline}</p>
              <p><strong className="text-gray-700">Skills:</strong> {previewJob.skills}</p>
              <div className="mt-4">
                <strong className="text-gray-700 block mb-1">Description:</strong>
                <p className="whitespace-pre-wrap text-gray-600">{previewJob.description}</p>
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
}
export default Positions;