import React, { useState, useEffect } from "react";
import HeroImg from "../assets/images/careersectionimg.webp";
import { useApi } from "../hooks/useApi";

// =============================================
// CONFIGURATION - Set to false to use real API
// =============================================
const USE_DUMMY_DATA = false; // Set to false to use real API
// =============================================

// Dummy Data for Testing (only used when USE_DUMMY_DATA = true)
const DUMMY_DEPARTMENTS = [
  { id: 1, name: "Engineering", jobCount: 3 },
  { id: 2, name: "Marketing", jobCount: 2 },
  { id: 3, name: "Sales", jobCount: 2 },
  { id: 4, name: "Human Resources", jobCount: 1 },
  { id: 5, name: "Finance", jobCount: 1 },
  { id: 6, name: "Product Management", jobCount: 1 },
  { id: 7, name: "Customer Support", jobCount: 1 },
  { id: 8, name: "Research & Development", jobCount: 0 },
];

const DUMMY_JOBS = [
  {
    id: 1,
    name: "Senior Software Engineer",
    department_id: 1,
    location: "New York, NY",
    job_type: "Full-time",
    responsibility: [
      "Lead development of backend services",
      "Mentor junior developers",
      "Architect scalable solutions",
      "Code review and quality assurance"
    ],
    requirements: [
      "5+ years of PHP/Laravel experience",
      "Strong understanding of OOP and design patterns",
      "Experience with MySQL and Redis",
      "Bachelor's degree in Computer Science"
    ]
  },
  {
    id: 2,
    name: "Frontend Developer",
    department_id: 1,
    location: "Remote",
    job_type: "Full-time",
    responsibility: [
      "Build responsive web applications",
      "Collaborate with UX designers",
      "Optimize application performance",
      "Write clean and maintainable code"
    ],
    requirements: [
      "3+ years of React/Vue.js experience",
      "Proficient in JavaScript/TypeScript",
      "Experience with CSS frameworks",
      "Understanding of RESTful APIs"
    ]
  },
  {
    id: 3,
    name: "DevOps Engineer",
    department_id: 1,
    location: "Austin, TX",
    job_type: "Full-time",
    responsibility: [
      "Manage cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor system performance",
      "Ensure security best practices"
    ],
    requirements: [
      "Experience with AWS/Azure",
      "Knowledge of Docker and Kubernetes",
      "Scripting skills in Python or Bash",
      "Understanding of networking concepts"
    ]
  },
  {
    id: 4,
    name: "Digital Marketing Manager",
    department_id: 2,
    location: "Chicago, IL",
    job_type: "Full-time",
    responsibility: [
      "Develop marketing strategies",
      "Manage social media campaigns",
      "Analyze marketing metrics",
      "Coordinate with content team"
    ],
    requirements: [
      "5+ years of digital marketing experience",
      "Experience with SEO/SEM",
      "Google Analytics certification",
      "Strong communication skills"
    ]
  },
  {
    id: 5,
    name: "Content Writer",
    department_id: 2,
    location: "Remote",
    job_type: "Part-time",
    responsibility: [
      "Create engaging blog posts",
      "Write email newsletters",
      "Develop social media content",
      "Optimize content for SEO"
    ],
    requirements: [
      "2+ years of content writing experience",
      "Excellent writing and editing skills",
      "Understanding of SEO principles",
      "Portfolio of published work"
    ]
  },
  {
    id: 6,
    name: "Sales Representative",
    department_id: 3,
    location: "Miami, FL",
    job_type: "Full-time",
    responsibility: [
      "Generate new leads",
      "Conduct product demonstrations",
      "Meet sales targets",
      "Build client relationships"
    ],
    requirements: [
      "2+ years of B2B sales experience",
      "Proven track record of meeting quotas",
      "Excellent negotiation skills",
      "CRM experience (Salesforce/HubSpot)"
    ]
  },
  {
    id: 7,
    name: "Account Executive",
    department_id: 3,
    location: "New York, NY",
    job_type: "Full-time",
    responsibility: [
      "Manage key accounts",
      "Identify upselling opportunities",
      "Negotiate contracts",
      "Provide sales forecasts"
    ],
    requirements: [
      "5+ years of enterprise sales experience",
      "Strong network in tech industry",
      "MBA preferred",
      "Strategic thinking abilities"
    ]
  },
  {
    id: 8,
    name: "HR Generalist",
    department_id: 4,
    location: "Boston, MA",
    job_type: "Full-time",
    responsibility: [
      "Manage recruitment process",
      "Handle employee relations",
      "Administer benefits",
      "Maintain HR records"
    ],
    requirements: [
      "3+ years of HR experience",
      "Knowledge of employment laws",
      "SHRM certification preferred",
      "Excellent interpersonal skills"
    ]
  },
  {
    id: 9,
    name: "Financial Analyst",
    department_id: 5,
    location: "San Francisco, CA",
    job_type: "Full-time",
    responsibility: [
      "Analyze financial data",
      "Create financial models",
      "Prepare budgets",
      "Generate financial reports"
    ],
    requirements: [
      "Bachelor's degree in Finance",
      "2+ years of financial analysis",
      "Advanced Excel skills",
      "Knowledge of financial software"
    ]
  },
  {
    id: 10,
    name: "Product Manager",
    department_id: 6,
    location: "Seattle, WA",
    job_type: "Full-time",
    responsibility: [
      "Define product strategy",
      "Gather user requirements",
      "Manage product roadmap",
      "Work with engineering teams"
    ],
    requirements: [
      "3+ years of product management",
      "Technical background preferred",
      "Experience with Agile methodologies",
      "Strong analytical skills"
    ]
  },
  {
    id: 11,
    name: "Customer Support Specialist",
    department_id: 7,
    location: "Remote",
    job_type: "Full-time",
    responsibility: [
      "Respond to customer inquiries",
      "Troubleshoot technical issues",
      "Document support cases",
      "Maintain customer satisfaction"
    ],
    requirements: [
      "1+ years of customer service",
      "Excellent communication skills",
      "Problem-solving abilities",
      "Experience with help desk software"
    ]
  }
];

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
    deptId: "",
    location: "",
    job_type: "",
    email: "Jobs@spay.live",
    responsibility: [],
    requirements: [],
  });
  const [newResponsibility, setNewResponsibility] = useState("");
  const [newRequirement, setNewRequirement] = useState("");
  const [newDeptName, setNewDeptName] = useState("");

  // State for dummy data management
  const [dummyDepartments, setDummyDepartments] = useState(DUMMY_DEPARTMENTS);
  const [dummyJobs, setDummyJobs] = useState(DUMMY_JOBS);

  // API Hooks - using the single useApi hook
  const deptApi = useApi();
  const jobsApi = useApi();
  const createDeptApi = useApi();
  const deleteDeptApi = useApi();
  const createJobApi = useApi();
  const deleteJobApi = useApi();

  const userRole = getUserRole();
  const isAdmin = userRole === 'admin';

  // Fetch departments
  useEffect(() => {
    if (!USE_DUMMY_DATA) {
      deptApi.get('/department');
    }
  }, []);

  // Fetch jobs
  useEffect(() => {
    if (!USE_DUMMY_DATA) {
      jobsApi.get('/position');
    }
  }, []);

  // Transform API data or use dummy data
  // IMPORTANT: Access the nested data array from API response
  const departments = !USE_DUMMY_DATA
    ? deptApi.data?.data?.map(dept => ({ 
        id: dept.id, 
        name: dept.name,
        // Calculate job count for each department
        jobCount: !USE_DUMMY_DATA 
          ? jobsApi.data?.data?.filter(job => job.department_id === dept.id).length || 0
          : dummyJobs.filter(job => job.department_id === dept.id).length
      })) || []
    : dummyDepartments;

  // Transform jobs data
  const jobs = !USE_DUMMY_DATA
    ? jobsApi.data?.data?.map(job => ({
        id: job.id,
        name: job.name,
        deptId: job.department_id,
        // Find department name
        dept: departments.find(d => d.id === job.department_id)?.name || '',
        location: job.location,
        job_type: job.job_type,
        email: "Jobs@spay.live",
        responsibility: job.responsibility || [],
        requirements: job.requirements || [],
      })) || []
    : dummyJobs.map(job => ({
        ...job,
        dept: departments.find(d => d.id === job.department_id)?.name || '',
        email: "Jobs@spay.live"
      }));

  // Log for debugging
  useEffect(() => {
    if (jobs.length > 0) {
      console.log("All jobs:", jobs);
      console.log("Selected department:", selectedDept);
    }
  }, [jobs, selectedDept]);

  const loading = !USE_DUMMY_DATA ? (deptApi.loading || jobsApi.loading) : false;
  const error = !USE_DUMMY_DATA ? (deptApi.error || jobsApi.error) : null;

  // Set default department when data loads
  useEffect(() => {
    if (departments.length > 0 && !selectedDept) {
      setSelectedDept(departments[0]);
    }
  }, [departments]);

  // Filter jobs based on selected department
  const filteredJobs = jobs.filter(
    (job) => job.deptId === selectedDept?.id
  );

  // Log filtered jobs
  useEffect(() => {
    console.log("Filtered jobs:", filteredJobs);
    console.log("Selected job:", selectedJob);
  }, [filteredJobs, selectedJob]);

  // Set first job of selected department
  useEffect(() => {
    if (filteredJobs.length > 0) {
      // Only set if the current selected job is not in the filtered list
      const isCurrentJobInFiltered = selectedJob && filteredJobs.some(job => job.id === selectedJob.id);
      if (!isCurrentJobInFiltered) {
        setSelectedJob(filteredJobs[0]);
      }
    } else {
      setSelectedJob(null);
    }
  }, [selectedDept, filteredJobs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addResponsibility = () => {
    if (newResponsibility.trim()) {
      setFormData(prev => ({
        ...prev,
        responsibility: [...prev.responsibility, newResponsibility.trim()]
      }));
      setNewResponsibility("");
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
      const hasJobs = jobs.some(job => job.deptId === departmentToDelete.id);
      
      if (hasJobs) {
        alert("Cannot delete department with existing jobs. Please delete all jobs in this department first.");
        setShowDeleteDeptModal(false);
        setDepartmentToDelete(null);
        return;
      }

      if (USE_DUMMY_DATA) {
        // Dummy data delete
        setDummyDepartments(departments.filter(dept => dept.id !== departmentToDelete.id));
      } else {
        // Real API delete
        const result = await deleteDeptApi.delete(`/Department_delete/${departmentToDelete.id}`);
        if (result.success) {
          deptApi.get('/department'); // Refresh departments
        }
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
      if (USE_DUMMY_DATA) {
        const newDept = {
          id: dummyDepartments.length + 1,
          name: newDeptName,
          jobCount: 0
        };
        setDummyDepartments([...dummyDepartments, newDept]);
      } else {
        // Real API create
        const result = await createDeptApi.post('/store_dep', { name: newDeptName });
        if (result.success) {
          deptApi.get('/department'); // Refresh departments
        }
      }
      setNewDeptName("");
      setShowDeptModal(false);
    }
  };

  const handleAddJob = () => {
    setModalMode('add');
    setFormData({
      name: "",
      deptId: selectedDept?.id || "",
      location: "",
      job_type: "",
      email: "Jobs@spay.live",
      responsibility: [],
      requirements: [],
    });
    setShowModal(true);
  };

  const handleEditJob = (job) => {
    setModalMode('edit');
    setCurrentJob(job);
    setFormData({
      name: job.name,
      deptId: job.deptId,
      location: job.location,
      job_type: job.job_type,
      email: job.email,
      responsibility: [...job.responsibility],
      requirements: [...job.requirements],
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
    
    if (USE_DUMMY_DATA) {
      // Dummy data operations
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (modalMode === 'add') {
        const selectedDeptObj = departments.find(d => d.id === parseInt(formData.deptId));
        const newJob = {
          id: dummyJobs.length + 1,
          ...formData,
          dept: selectedDeptObj?.name || '',
          department_id: parseInt(formData.deptId)
        };
        setDummyJobs([...dummyJobs, newJob]);
      } else {
        setDummyJobs(dummyJobs.map(job => 
          job.id === currentJob.id ? { ...job, ...formData, department_id: parseInt(formData.deptId) } : job
        ));
      }
    } else {
      // Real API operations
      const jobData = {
        name: formData.name,
        department_id: parseInt(formData.deptId),
        location: formData.location,
        job_type: formData.job_type,
        responsibility: formData.responsibility,
        requirements: formData.requirements,
      };

      if (modalMode === 'add') {
        const result = await createJobApi.post('/store_position', jobData);
        if (result.success) {
          jobsApi.get('/position'); // Refresh jobs
          deptApi.get('/department'); // Refresh department counts
        }
      } else {
        // For update, you might need to use a different endpoint
        alert("Update functionality - please implement update endpoint");
      }
    }
    
    setShowModal(false);
  };

  const handleDelete = async () => {
    if (USE_DUMMY_DATA) {
      // Dummy data delete
      await new Promise(resolve => setTimeout(resolve, 500));
      setDummyJobs(dummyJobs.filter(job => job.id !== currentJob.id));
    } else {
      // Real API delete
      const result = await deleteJobApi.delete(`/position_delete/${currentJob.id}`);
      if (result.success) {
        jobsApi.get('/position'); // Refresh jobs
        deptApi.get('/department'); // Refresh department counts
      }
    }
    setShowModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading career opportunities...</p>
        </div>
      </div>
    );
  }

  if (error && !USE_DUMMY_DATA) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
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
      {/* Test Mode Indicator */}
      {USE_DUMMY_DATA && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="font-medium">
              🔧 USING DUMMY DATA - Toggle USE_DUMMY_DATA to false for real API
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="relative">
        <img
          src={HeroImg}
          alt="Career Banner"
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Join Our Team
          </h1>
        </div>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* LEFT SIDEBAR - Departments */}
        <div className="bg-white rounded-xl shadow-md p-5 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              Departments
            </h3>
            {isAdmin && (
              <button
                onClick={handleAddDepartment}
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center text-xl font-bold transition-colors shadow-sm"
                title="Add Department"
              >
                +
              </button>
            )}
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {departments.map((dept) => (
              <div key={dept.id} className="relative group">
                <button
                  onClick={() => setSelectedDept(dept)}
                  className={`w-full text-left p-3 rounded-lg transition flex items-center justify-between
                    ${
                      selectedDept?.id === dept.id
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                  <span className="truncate max-w-[140px]">{dept.name}</span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {dept.jobCount > 0 && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedDept?.id === dept.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}>
                        {dept.jobCount}
                      </span>
                    )}
                  </div>
                </button>
                
                {isAdmin && (
                  <button
                    onClick={(e) => handleDeleteDepartmentClick(dept, e)}
                    className="absolute -top-2 -right-2 hidden group-hover:flex p-1.5 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition-colors shadow-sm"
                    title="Delete Department"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE - Job Titles */}
        <div className="bg-white rounded-xl shadow-md p-5 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              Open Positions
              {selectedDept && (
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredJobs.length})
                </span>
              )}
            </h3>
            {isAdmin && (
              <button
                onClick={handleAddJob}
                disabled={!selectedDept}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xl font-bold transition-colors shadow-sm flex-shrink-0 ${
                  selectedDept 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                title="Add Position"
              >
                +
              </button>
            )}
          </div>

          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="relative group bg-white rounded-lg hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className={`w-full text-left p-3 rounded-lg transition-all
                      ${
                        selectedJob?.id === job.id
                          ? "bg-blue-50 border-l-4 border-blue-600"
                          : "hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                  >
                    <div className="font-medium">{job.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {job.location} • {job.job_type}
                    </div>
                  </button>
                  
                  {isAdmin && (
                    <div className="absolute top-2 right-2 hidden group-hover:flex gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditJob(job);
                        }}
                        className="p-1.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors shadow-sm"
                        title="Edit"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteClick(job);
                        }}
                        className="p-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors shadow-sm"
                        title="Delete"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">
                  {selectedDept 
                    ? "No open positions in this department"
                    : "Select a department to view positions"}
                </p>
                {isAdmin && selectedDept && (
                  <button
                    onClick={handleAddJob}
                    className="mt-4 text-blue-600 text-sm hover:underline font-medium"
                  >
                    + Add first position
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Job Details */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
          {selectedJob ? (
            <>
              <h2 className="text-2xl font-bold mb-2">
                {selectedJob.name}
              </h2>

              <div className="flex gap-6 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedJob.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {selectedJob.job_type}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-600 rounded"></span>
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                  {selectedJob.responsibility?.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-600 rounded"></span>
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                  {selectedJob.requirements?.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Show Apply button only for non-admin users */}
              {!isAdmin && (
                <a
                  href={`mailto:${selectedJob.email}?subject=Application for ${selectedJob.name}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Apply Now
                </a>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500">
                Select a position to view details
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Department Modal */}
      {showDeptModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Add New Department</h3>
                <button
                  onClick={() => setShowDeptModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleAddDepartmentSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department Name *
                  </label>
                  <input
                    type="text"
                    value={newDeptName}
                    onChange={(e) => setNewDeptName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Engineering"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
                  >
                    Add Department
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeptModal(false)}
                    className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Department Confirmation Modal */}
      {showDeleteDeptModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Delete Department</h3>
                <p className="text-gray-600">
                  Are you sure you want to delete "{departmentToDelete?.name}"? This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDeleteDepartment}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition shadow-sm"
                >
                  Delete Department
                </button>
                <button
                  onClick={() => {
                    setShowDeleteDeptModal(false);
                    setDepartmentToDelete(null);
                  }}
                  className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Job Modal */}
      {showModal && modalMode !== 'delete' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  {modalMode === 'add' ? 'Add New Position' : 'Edit Position'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Senior Software Engineer"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department *
                  </label>
                  <select
                    name="deptId"
                    value={formData.deptId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location and Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="New York, NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Type *
                    </label>
                    <select
                      name="job_type"
                      value={formData.job_type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Type</option>
                      <option value="Full-time">Full Time</option>
                      <option value="Part-time">Part Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Responsibilities
                  </label>
                  <div className="space-y-2">
                    {formData.responsibility.map((resp, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm bg-gray-50 p-2 rounded border border-gray-200">{resp}</span>
                        <button
                          type="button"
                          onClick={() => removeResponsibility(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newResponsibility}
                        onChange={(e) => setNewResponsibility(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a responsibility"
                      />
                      <button
                        type="button"
                        onClick={addResponsibility}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements
                  </label>
                  <div className="space-y-2">
                    {formData.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="flex-1 text-sm bg-gray-50 p-2 rounded border border-gray-200">{req}</span>
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a requirement"
                      />
                      <button
                        type="button"
                        onClick={addRequirement}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={createJobApi.loading}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
                  >
                    {createJobApi.loading ? 'Saving...' : 'Save Position'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Job Confirmation Modal */}
      {showModal && modalMode === 'delete' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Delete Position</h3>
                <p className="text-gray-600">
                  Are you sure you want to delete "{currentJob?.name}"? This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  disabled={deleteJobApi.loading}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition shadow-sm disabled:opacity-50"
                >
                  {deleteJobApi.loading ? 'Deleting...' : 'Delete'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
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