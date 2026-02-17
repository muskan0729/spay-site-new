import React, { useState, useEffect } from "react";
import HeroImg from "../assets/images/careersectionimg.webp";

const Career = () => {
  const [selectedDept, setSelectedDept] = useState("Information Technology");
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = [
    "Information Technology",
    "Digital Marketing and PR",
    "Finance and Operations",
    "HR and Admin",
    "Sales and Marketing",
    "Compliance",
  ];

  const jobsData = [
    {
      id: 1,
      title: "PHP Laravel Developer (Intern)",
      dept: "Information Technology",
      location: "Mumbai",
      type: "Internship",
      email: "Jobs@spay.live",
      responsibilities: [
        "Design scalable web applications",
        "Collaborate with cross-functional teams",
        "Write clean and efficient code",
      ],
      requirements: [
        "Bachelor’s degree in CS",
        "Knowledge of Laravel & MySQL",
      ],
    },
    {
      id: 2,
      title: "Marketing Manager",
      dept: "Digital Marketing and PR",
      location: "Mumbai",
      type: "Full Time",
      email: "Jobs@spay.live",
      responsibilities: [
        "Lead paid ad campaigns",
        "Manage SEO & content strategy",
      ],
      requirements: [
        "2+ years experience",
        "Google Analytics knowledge",
      ],
    },
    {
      id: 3,
      title: "Operations Manager",
      dept: "Finance and Operations",
      location: "Mumbai",
      type: "Full Time",
      email: "Jobs@spay.live",
      responsibilities: [
        "Oversee operations",
        "Manage budgets and vendors",
      ],
      requirements: [
        "5+ years experience",
        "Fintech background",
      ],
    },
        {
      id: 4,
      title: "PHP Laravel Developer ",
      dept: "Information Technology",
      location: "Mumbai",
      type: "Internship",
      email: "Jobs@spay.live",
      responsibilities: [
        "Design scalable web applications",
        "Collaborate with cross-functional teams",
        "Write clean and efficient code",
      ],
      requirements: [
        "Bachelor’s degree in CS",
        "Knowledge of Laravel & MySQL",
      ],
    }
  ];

  const filteredJobs = jobsData.filter(
    (job) => job.dept === selectedDept
  );

  useEffect(() => {
    setSelectedJob(filteredJobs[0] || null);
  }, [selectedDept]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative">
        <img
          src={HeroImg}
          alt="Career Banner"
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Join Our Team
          </h1>
        </div>
      </div>

      {/* 3 Column Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* LEFT SIDEBAR - Departments */}
        <div className="bg-white rounded-xl shadow-md p-5 h-fit">
          <h3 className="font-semibold mb-4 text-gray-800">
            Departments
          </h3>

          <div className="space-y-2">
            {departments.map((dept, index) => (
              <button
                key={index}
                onClick={() => setSelectedDept(dept)}
                className={`w-full text-left p-3 rounded-lg transition
                  ${
                    selectedDept === dept
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE - Job Titles */}
        <div className="bg-white rounded-xl shadow-md p-5 h-fit">
          <h3 className="font-semibold mb-4 text-gray-800">
            Open Positions
          </h3>

          <div className="space-y-2">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`w-full text-left p-3 rounded-lg transition
                    ${
                      selectedJob?.id === job.id
                        ? "bg-blue-100 border-l-4 border-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                >
                  <div className="font-medium">{job.title}</div>
                  <div className="text-xs text-gray-500">
                    {job.location}
                  </div>
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                No jobs available.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT - Job Details */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-8">
          {selectedJob ? (
            <>
              <h2 className="text-2xl font-bold mb-2">
                {selectedJob.title}
              </h2>

              <div className="flex gap-6 text-sm text-gray-600 mb-6">
                <span>📍 {selectedJob.location}</span>
                <span>💼 {selectedJob.type}</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-2">
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {selectedJob.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${selectedJob.email}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </a>
            </>
          ) : (
            <p className="text-gray-500">
              Select a job to view details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
