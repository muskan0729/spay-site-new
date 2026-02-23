import React, { useState, useEffect } from "react";
import HeroImg from "../assets/images/careersectionimg.webp";
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

// Get user role from localStorage
const getUserRole = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  return userData?.role || 'user';
};

const Career = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeptModal, setShowDeptModal] = useState(false);
  const [showDeleteDeptModal, setShowDeleteDeptModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentJob, setCurrentJob] = useState(null);
  const [departmentToDelete, setDepartmentToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department_id: "",
    location: "",
    job_type: "",
    experience: "",
    salary_range: "",
    skills: [],
    responsibility: [],
    requirements: [],
    status: true
  });
  const [errors, setErrors] = useState({});
  const [newSkill, setNewSkill] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");
  const [newRequirement, setNewRequirement] = useState("");
  const [newDeptName, setNewDeptName] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const navigate = useNavigate();
  // Predefined salary ranges
  const salaryRanges = [
    "Below $30,000",
    "$30,000 - $50,000",
    "$50,000 - $70,000",
    "$70,000 - $90,000",
    "$90,000 - $110,000",
    "$110,000 - $130,000",
    "$130,000 - $150,000",
    "$150,000 - $170,000",
    "$170,000 - $200,000",
    "Above $200,000"
  ];

  // API Hooks
  const deptApi = useApi();
  const jobsApi = useApi();
  const createDeptApi = useApi();
  const deleteDeptApi = useApi();
  const createJobApi = useApi();
  const updateJobApi = useApi();
  const deleteJobApi = useApi();

  const userRole = getUserRole();
  const isAdmin = userRole === 'admin';

  // Fetch departments
  useEffect(() => {
    deptApi.get('/department');
  }, []);

  // Fetch jobs
  useEffect(() => {
    jobsApi.get('/position');
  }, []);

  // Refresh jobs when new position is added or updated
  useEffect(() => {
    if (createJobApi.data?.success || updateJobApi.data?.success) {
      jobsApi.get('/position');
      deptApi.get('/department');
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    }
  }, [createJobApi.data, updateJobApi.data]);

  // Check if all data is loaded
  useEffect(() => {
    if (!deptApi.loading && !jobsApi.loading) {
      setDataLoaded(true);
    }
  }, [deptApi.loading, jobsApi.loading]);

  // Transform API data
  const departments = deptApi.data?.data?.map(dept => ({
    id: dept.id,
    name: dept.name,
    jobCount: jobsApi.data?.data?.filter(job => job.department_id === dept.id).length || 0
  })) || [];

  // Transform jobs data
  const jobs = jobsApi.data?.data?.map(job => ({
    id: job.id,
    name: job.name,
    department_id: job.department_id,
    department: departments.find(d => d.id === job.department_id)?.name || '',
    location: job.location,
    job_type: job.job_type,
    experience: job.experience,
    salary_range: job.salary_range,
    skills: job.skills || [],
    responsibility: job.responsibility || [],
    requirements: job.requirements || [],
    status: job.status,
    email: "Jobs@spay.live"
  })) || [];

  const loading = deptApi.loading || jobsApi.loading || createJobApi.loading || updateJobApi.loading;
  const error = deptApi.error || jobsApi.error || createJobApi.error || updateJobApi.error;

  // Set default department when data loads
  useEffect(() => {
    if (dataLoaded && departments.length > 0 && !selectedDept) {
      setSelectedDept(departments[0]);
    }
  }, [dataLoaded, departments, selectedDept]);

  // Filter jobs based on selected department - with safe check
  const filteredJobs = dataLoaded && jobs.length > 0 && selectedDept
    ? jobs.filter(job => job.department_id === selectedDept.id)
    : [];

  // Set first job of selected department
  useEffect(() => {
    if (dataLoaded && filteredJobs.length > 0) {
      // Check if current selected job exists in filtered list
      const isCurrentJobValid = selectedJob && filteredJobs.some(job => job.id === selectedJob.id);

      if (!isCurrentJobValid) {
        setSelectedJob(filteredJobs[0]);
      }
    } else {
      setSelectedJob(null);
    }
  }, [dataLoaded, selectedDept, filteredJobs, selectedJob]);

  const validateForm = () => {
    const newErrors = {};

    // Job Title validation
    if (!formData.name.trim()) {
      newErrors.name = "Job title is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Job title must be at least 3 characters";
    }

    // Department validation
    if (!formData.department_id) {
      newErrors.department_id = "Department is required";
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    // Job Type validation
    if (!formData.job_type) {
      newErrors.job_type = "Job type is required";
    }

    // Experience validation - must be numeric with years format
    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else {
      // Check if it matches pattern like "X years" or "X-Y years"
      const experiencePattern = /^\d+(-\d+)?\s*(years?|yrs?)?$/i;
      if (!experiencePattern.test(formData.experience)) {
        newErrors.experience = "Please enter valid experience (e.g., 3 years or 3-5 years)";
      }
    }

    // Skills validation
    if (formData.skills.length === 0) {
      newErrors.skills = "At least one skill is required";
    }

    // Responsibilities validation
    if (formData.responsibility.length === 0) {
      newErrors.responsibility = "At least one responsibility is required";
    }

    // Requirements validation
    if (formData.requirements.length === 0) {
      newErrors.requirements = "At least one requirement is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Special handling for experience field
    if (name === 'experience') {
      // Allow only numbers, hyphen, and spaces
      const filteredValue = value.replace(/[^0-9\s-]/g, '');
      setFormData(prev => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill("");
      // Clear skills error
      if (errors.skills) {
        setErrors(prev => ({ ...prev, skills: null }));
      }
    }
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setFormData(prev => ({
        ...prev,
        responsibility: [...prev.responsibility, newResponsibility.trim()]
      }));
      setNewResponsibility("");
      // Clear responsibility error
      if (errors.responsibility) {
        setErrors(prev => ({ ...prev, responsibility: null }));
      }
    }
  };

  const removeResponsibility = (index) => {
    setFormData(prev => ({
      ...prev,
      responsibility: prev.responsibility.filter((_, i) => i !== index)
    }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement("");
      // Clear requirement error
      if (errors.requirements) {
        setErrors(prev => ({ ...prev, requirements: null }));
      }
    }
  };

  const removeRequirement = (index) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleAddDepartment = () => {
    setShowDeptModal(true);
  };

  const handleDeleteDepartmentClick = (dept, e) => {
    e.stopPropagation();
    setDepartmentToDelete(dept);
    setShowDeleteDeptModal(true);
  };

  const handleDeleteDepartment = async () => {
    if (departmentToDelete) {
      // Check if department has jobs
      const hasJobs = jobs.some(job => job.department_id === departmentToDelete.id);

      if (hasJobs) {
        alert("Cannot delete department with existing jobs. Please delete all jobs in this department first.");
        setShowDeleteDeptModal(false);
        setDepartmentToDelete(null);
        return;
      }

      const result = await deleteDeptApi.delete(`/Department_delete/${departmentToDelete.id}`);
      if (result.success) {
        deptApi.get('/department'); // Refresh departments
      }

      // If selected department is deleted, select first available
      if (selectedDept?.id === departmentToDelete.id) {
        const remainingDepts = departments.filter(dept => dept.id !== departmentToDelete.id);
        setSelectedDept(remainingDepts[0] || null);
      }

      setShowDeleteDeptModal(false);
      setDepartmentToDelete(null);
    }
  };

  const handleAddDepartmentSubmit = async (e) => {
    e.preventDefault();
    if (newDeptName.trim()) {
      const result = await createDeptApi.post('/store_dep', { name: newDeptName });
      if (result.success) {
        deptApi.get('/department'); // Refresh departments
        setNewDeptName("");
        setShowDeptModal(false);
      }
    }
  };

  const handleAddJob = () => {
    setModalMode('add');
    setErrors({});
    setFormData({
      name: "",
      department_id: selectedDept?.id || "",
      location: "",
      job_type: "",
      experience: "",
      salary_range: "",
      skills: [],
      responsibility: [],
      requirements: [],
      status: true
    });
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setModalMode('edit');
    setErrors({});
    setCurrentJob(job);
    setFormData({
      name: job.name,
      department_id: job.department_id,
      location: job.location,
      job_type: job.job_type,
      experience: job.experience || "",
      salary_range: job.salary_range || "",
      skills: job.skills || [],
      responsibility: job.responsibility || [],
      requirements: job.requirements || [],
      status: job.status
    });
    setShowModal(true);
  };

  const handleDeleteClick = (job) => {
    setModalMode('delete');
    setCurrentJob(job);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    const jobData = {
      name: formData.name,
      department_id: parseInt(formData.department_id),
      location: formData.location,
      job_type: formData.job_type,
      experience: formData.experience,
      salary_range: formData.salary_range,
      skills: formData.skills,
      responsibility: formData.responsibility,
      requirements: formData.requirements,
      status: formData.status
    };

    if (modalMode === 'add') {
      const result = await createJobApi.post('/store_position', jobData);
      if (result.success) {
        setShowModal(false);
      }
    } else {
      // Update existing position
      const result = await updateJobApi.put(`/position/${currentJob.id}`, jobData);
      if (result.success) {
        setShowModal(false);
      }
    }
  };

  const handleDelete = async () => {
    const result = await deleteJobApi.delete(`/position_delete/${currentJob.id}`);
    if (result.success) {
      jobsApi.get('/position'); // Refresh jobs
      deptApi.get('/department'); // Refresh department counts
      setShowModal(false);
    }
  };

  if (loading && !dataLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-red-600 mb-4">Error loading data: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative">
        <img
          src={HeroImg}
          alt="Career Banner"
          className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 flex items-center justify-center">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 text-center">
            Join Our Team
          </h1>
        </div>
      </div>

      {/* Success Message */}
      {updateSuccess && (
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 mt-4">
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
            <p className="text-sm sm:text-base font-medium">
              {modalMode === 'add' ? 'Position added successfully!' : 'Position updated successfully!'}
            </p>
          </div>
        </div>
      )}

      {/* Role Toggle for Testing - Remove in production */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 flex justify-end">
        <button
          onClick={() => {
            const newRole = isAdmin ? 'user' : 'admin';
            localStorage.setItem('userData', JSON.stringify({ role: newRole }));
            window.location.reload();
          }}
          className="px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-[10px] xs:text-xs sm:text-sm shadow-md"
        >
          Switch to {isAdmin ? 'User' : 'Admin'} View
        </button>
      </div>

      {/* 3 Column Layout - Fully Responsive Grid */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {/* LEFT SIDEBAR - Departments */}
        <div className="bg-white rounded-lg xs:rounded-xl shadow-md p-3 xs:p-4 sm:p-5 h-fit md:sticky md:top-24">
          <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
            <h3 className="font-semibold text-gray-800 text-sm xs:text-base sm:text-lg">
              Departments
            </h3>
            {isAdmin && (
              <button
                onClick={handleAddDepartment}
                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center text-base xs:text-lg sm:text-xl font-bold transition-colors shadow-sm flex-shrink-0"
                title="Add Department"
              >
                +
              </button>
            )}
          </div>

          <div className="space-y-1 xs:space-y-2 max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {departments.length > 0 ? (
              departments.map((dept) => (
                <div key={dept.id} className="relative group">
                  <button
                    onClick={() => setSelectedDept(dept)}
                    className={`w-full text-left p-1.5 xs:p-2 sm:p-3 rounded-lg transition flex items-center justify-between text-xs xs:text-sm sm:text-base
                      ${selectedDept?.id === dept.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    <span className="truncate max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[140px] text-gray-900 font-medium">
                      {dept.name}
                    </span>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {dept.jobCount > 0 && (
                        <span className={`text-[10px] xs:text-xs px-1 xs:px-1.5 sm:px-2 py-0.5 rounded-full ${selectedDept?.id === dept.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                          }`}>
                          {dept.jobCount}
                        </span>
                      )}
                    </div>
                  </button>

                  {isAdmin && (
                    <button
                      onClick={(e) => handleDeleteDepartmentClick(dept, e)}
                      className="absolute -top-1 -right-1 xs:-top-1.5 xs:-right-1.5 sm:-top-2 sm:-right-2 hidden group-hover:flex p-0.5 xs:p-1 sm:p-1.5 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors shadow-sm"
                      title="Delete Department"
                    >
                      <svg className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-3 xs:py-4 text-gray-500 text-xs xs:text-sm">
                No departments found
              </div>
            )}
          </div>
        </div>

        {/* MIDDLE - Job Titles */}
        <div className="bg-white rounded-lg xs:rounded-xl shadow-md p-3 xs:p-4 sm:p-5 h-fit md:sticky md:top-24">
          <div className="flex items-center justify-between mb-2 xs:mb-3 sm:mb-4">
            <h3 className="font-semibold text-gray-800 text-sm xs:text-base sm:text-lg">
              Open Positions
              {selectedDept && (
                <span className="ml-1 xs:ml-2 text-[10px] xs:text-xs sm:text-sm font-normal text-gray-500">
                  ({filteredJobs.length})
                </span>
              )}
            </h3>
            {isAdmin && (
              <button
                onClick={handleAddJob}
                disabled={!selectedDept}
                className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-base xs:text-lg sm:text-xl font-bold transition-colors shadow-sm flex-shrink-0 ${selectedDept
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                title="Add Position"
              >
                +
              </button>
            )}
          </div>

          <div className="space-y-1 xs:space-y-2 max-h-[250px] xs:max-h-[300px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="relative group bg-white rounded-lg hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className={`w-full text-left p-1.5 xs:p-2 sm:p-3 rounded-lg transition-all text-xs xs:text-sm sm:text-base
                      ${selectedJob?.id === job.id
                        ? "bg-blue-50 border-l-4 border-blue-600"
                        : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                  >
                    <div className="font-medium text-gray-900 pr-12 xs:pr-14 sm:pr-16 md:pr-20 text-xs xs:text-sm sm:text-base">
                      {job.name}
                    </div>
                    <div className="text-[10px] xs:text-xs text-gray-500 mt-0.5 xs:mt-1">
                      {job.location} • {job.job_type}
                      {job.experience && ` • Exp: ${job.experience}`}
                    </div>
                  </button>

                  {isAdmin && (
                    <div className="absolute top-0.5 right-0.5 xs:top-1 xs:right-1 sm:top-2 sm:right-2 hidden group-hover:flex gap-0.5 xs:gap-1 bg-white/90 backdrop-blur-sm rounded-lg p-0.5 xs:p-1 shadow-sm">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditJob(job);
                        }}
                        className="p-0.5 xs:p-1 sm:p-1.5 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                        title="Edit"
                      >
                        <svg className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(job);
                        }}
                        className="p-0.5 xs:p-1 sm:p-1.5 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
                        title="Delete"
                      >
                        <svg className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-4 xs:py-6 sm:py-8">
                <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
                  {selectedDept
                    ? "No open positions in this department"
                    : "Select a department to view positions"}
                </p>
                {isAdmin && selectedDept && (
                  <button
                    onClick={handleAddJob}
                    className="mt-2 xs:mt-3 sm:mt-4 text-blue-600 text-[10px] xs:text-xs sm:text-sm hover:underline font-medium"
                  >
                    + Add first position
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Job Details */}
        <div className="md:col-span-2 bg-white rounded-lg xs:rounded-xl shadow-md p-4 xs:p-5 sm:p-6 md:p-8">
          {selectedJob ? (
            <>
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 xs:mb-2">
                {selectedJob.name}
              </h2>

              <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-6 text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 xs:mb-4 sm:mb-6">
                <span className="flex items-center gap-0.5 xs:gap-1">
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedJob.location}
                </span>
                <span className="flex items-center gap-0.5 xs:gap-1">
                  <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {selectedJob.job_type}
                </span>
                {selectedJob.experience && (
                  <span className="flex items-center gap-0.5 xs:gap-1">
                    <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedJob.experience}
                  </span>
                )}
                {selectedJob.salary_range && (
                  <span className="flex items-center gap-0.5 xs:gap-1">
                    <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedJob.salary_range}
                  </span>
                )}
              </div>

              {/* Skills Section */}
              {selectedJob.skills && selectedJob.skills.length > 0 && (
                <div className="mb-3 xs:mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1 xs:mb-2 flex items-center gap-1 xs:gap-2 text-xs xs:text-sm sm:text-base">
                    <span className="w-1 h-3 xs:h-4 sm:h-5 bg-blue-600 rounded"></span>
                    Required Skills
                  </h4>
                  <div className="flex flex-wrap gap-1 xs:gap-2">
                    {selectedJob.skills.map((skill, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities Section */}
              {selectedJob.responsibility && selectedJob.responsibility.length > 0 && (
                <div className="mb-3 xs:mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-1 xs:mb-2 flex items-center gap-1 xs:gap-2 text-xs xs:text-sm sm:text-base">
                    <span className="w-1 h-3 xs:h-4 sm:h-5 bg-blue-600 rounded"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-0.5 xs:space-y-1 sm:space-y-2 pl-1 xs:pl-2 text-[10px] xs:text-xs sm:text-sm">
                    {selectedJob.responsibility.map((item, i) => (
                      <li key={i} className="text-[10px] xs:text-xs sm:text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements Section */}
              {selectedJob.requirements && selectedJob.requirements.length > 0 && (
                <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                  <h4 className="font-semibold text-gray-800 mb-1 xs:mb-2 flex items-center gap-1 xs:gap-2 text-xs xs:text-sm sm:text-base">
                    <span className="w-1 h-3 xs:h-4 sm:h-5 bg-blue-600 rounded"></span>
                    Requirements
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-0.5 xs:space-y-1 sm:space-y-2 pl-1 xs:pl-2 text-[10px] xs:text-xs sm:text-sm">
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i} className="text-[10px] xs:text-xs sm:text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              )}


              {/* Show Apply button only for non-admin users */}
              {!isAdmin && (
                <button
                  onClick={() => navigate(`/careers/apply/${selectedJob.id}`)}
                  className="inline-flex items-center gap-1 xs:gap-2 bg-blue-600 text-white px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg text-[10px] xs:text-xs sm:text-sm md:text-base"
                >
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Apply Now
                </button>
              )}


            </>
          ) : (
            <div className="text-center py-6 xs:py-8 sm:py-10 md:py-12">
              <svg className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-300 mx-auto mb-2 xs:mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-xs xs:text-sm sm:text-base">
                {selectedDept ? "Select a position to view details" : "Select a department first"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Department Modal */}
      {showDeptModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowDeptModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl w-full max-w-[90%] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Add New Department</h3>
                <button
                  onClick={() => setShowDeptModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleAddDepartmentSubmit}>
                <div className="mb-4 sm:mb-6">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Department Name *
                  </label>
                  <input
                    type="text"
                    value={newDeptName}
                    onChange={(e) => setNewDeptName(e.target.value)}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400"
                    placeholder="e.g., Engineering"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setShowDeptModal(false)}
                    className="w-full sm:flex-1 border border-gray-300 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base font-medium text-gray-700 order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={createDeptApi.loading}
                    className="w-full sm:flex-1 bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition shadow-sm text-sm sm:text-base font-medium disabled:opacity-50 order-1 sm:order-2"
                  >
                    {createDeptApi.loading ? 'Adding...' : 'Add Department'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Department Confirmation Modal */}
      {showDeleteDeptModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setShowDeleteDeptModal(false);
              setDepartmentToDelete(null);
            }}
          ></div>

          <div className="relative bg-white rounded-xl w-full max-w-[90%] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto shadow-2xl">
            <div className="p-5 sm:p-6 md:p-8">
              <button
                onClick={() => {
                  setShowDeleteDeptModal(false);
                  setDepartmentToDelete(null);
                }}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Delete Department</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Are you sure you want to delete "{departmentToDelete?.name}"? This action cannot be undone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    setShowDeleteDeptModal(false);
                    setDepartmentToDelete(null);
                  }}
                  className="w-full sm:flex-1 border border-gray-300 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base font-medium text-gray-700 order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteDepartment}
                  disabled={deleteDeptApi.loading}
                  className="w-full sm:flex-1 bg-red-600 text-white py-3 sm:py-4 rounded-lg hover:bg-red-700 transition shadow-sm text-sm sm:text-base font-medium disabled:opacity-50 order-1 sm:order-2"
                >
                  {deleteDeptApi.loading ? 'Deleting...' : 'Delete Department'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Job Modal */}
      {showModal && modalMode !== 'delete' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl w-full max-w-[95%] xs:max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] mx-auto max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white z-20 border-b border-gray-100 p-5 sm:p-6 md:p-8">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {modalMode === 'add' ? 'Add New Position' : 'Edit Position'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Job Title */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="e.g., Senior Software Engineer"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Department - Readonly/Disabled */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <select
                    name="department_id"
                    value={formData.department_id}
                    onChange={handleInputChange}
                    required
                    disabled
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed text-sm sm:text-base ${errors.department_id ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id} className="text-gray-900">
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  {errors.department_id && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.department_id}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Department is locked to the selected department</p>
                </div>

                {/* Location and Job Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400 ${errors.location ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="New York, NY"
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.location}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Job Type *
                    </label>
                    <select
                      name="job_type"
                      value={formData.job_type}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 ${errors.job_type ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      <option value="" className="text-gray-500">Select Type</option>
                      <option value="Full-time" className="text-gray-900">Full Time</option>
                      <option value="Part-time" className="text-gray-900">Part Time</option>
                      <option value="Internship" className="text-gray-900">Internship</option>
                      <option value="Contract" className="text-gray-900">Contract</option>
                    </select>
                    {errors.job_type && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.job_type}</p>
                    )}
                  </div>
                </div>

                {/* Experience and Salary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400 ${errors.experience ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="e.g., 3 years or 3-5 years"
                    />
                    {errors.experience && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.experience}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Salary Range
                    </label>
                    <select
                      name="salary_range"
                      value={formData.salary_range}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base text-gray-900"
                    >
                      <option value="" className="text-gray-500">Select Salary Range</option>
                      {salaryRanges.map(range => (
                        <option key={range} value={range} className="text-gray-900">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Status Toggle */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <label className="text-sm sm:text-base font-medium text-gray-700">
                    Status:
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="status"
                      checked={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 sm:w-14 sm:h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ms-3 sm:ms-4 text-sm sm:text-base font-medium text-gray-700">
                      {formData.status ? 'Active' : 'Inactive'}
                    </span>
                  </label>
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Required Skills *
                  </label>
                  <div className="space-y-3">
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm sm:text-base bg-gray-50 p-3 rounded-lg border border-gray-200 break-words text-gray-900">
                          {skill}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="text-red-500 hover:text-red-700 p-2 flex-shrink-0 text-lg sm:text-xl"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400"
                        placeholder="Add a required skill"
                      />
                      <button
                        type="button"
                        onClick={addSkill}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base whitespace-nowrap font-medium"
                      >
                        Add Skill
                      </button>
                    </div>
                  </div>
                  {errors.skills && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.skills}</p>
                  )}
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Responsibilities *
                  </label>
                  <div className="space-y-3">
                    {formData.responsibility.map((resp, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm sm:text-base bg-gray-50 p-3 rounded-lg border border-gray-200 break-words text-gray-900">
                          {resp}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeResponsibility(index)}
                          className="text-red-500 hover:text-red-700 p-2 flex-shrink-0 text-lg sm:text-xl"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={newResponsibility}
                        onChange={(e) => setNewResponsibility(e.target.value)}
                        className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400"
                        placeholder="Add a responsibility"
                      />
                      <button
                        type="button"
                        onClick={addResponsibility}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base whitespace-nowrap font-medium"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {errors.responsibility && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.responsibility}</p>
                  )}
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Requirements *
                  </label>
                  <div className="space-y-3">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm sm:text-base bg-gray-50 p-3 rounded-lg border border-gray-200 break-words text-gray-900">
                          {req}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="text-red-500 hover:text-red-700 p-2 flex-shrink-0 text-lg sm:text-xl"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        className="flex-1 px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-400"
                        placeholder="Add a requirement"
                      />
                      <button
                        type="button"
                        onClick={addRequirement}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base whitespace-nowrap font-medium"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {errors.requirements && (
                    <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.requirements}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="w-full sm:flex-1 border border-gray-300 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base font-medium text-gray-700 order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={createJobApi.loading || updateJobApi.loading}
                    className="w-full sm:flex-1 bg-blue-600 text-white py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition shadow-sm text-sm sm:text-base font-medium disabled:opacity-50 order-1 sm:order-2"
                  >
                    {createJobApi.loading || updateJobApi.loading
                      ? 'Saving...'
                      : modalMode === 'add' ? 'Save Position' : 'Update Position'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Job Confirmation Modal */}
      {showModal && modalMode === 'delete' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative bg-white rounded-xl w-full max-w-[90%] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto shadow-2xl">
            <div className="p-5 sm:p-6 md:p-8">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Delete Position</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Are you sure you want to delete "{currentJob?.name}"? This action cannot be undone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full sm:flex-1 border border-gray-300 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base font-medium text-gray-700 order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleteJobApi.loading}
                  className="w-full sm:flex-1 bg-red-600 text-white py-3 sm:py-4 rounded-lg hover:bg-red-700 transition shadow-sm text-sm sm:text-base font-medium disabled:opacity-50 order-1 sm:order-2"
                >
                  {deleteJobApi.loading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;