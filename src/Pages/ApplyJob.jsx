import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetById } from "../hooks/useGet";
import { usePostForm } from "../hooks/usePost";

const ApplyJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: response, loading: jobLoading, error: jobError } = useGetById("/positions", id);
    const job = response?.data;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_no: "",
        location: "",
        resume: null,
    });

    const { postForm, loading: submitting } = usePostForm("/apply");

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error("Full name is required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Enter valid email address");
            return false;
        }

        const mobileRegex = /^\+?[0-9]{10,15}$/;
        if (!mobileRegex.test(formData.mobile_no)) {
            toast.error("Enter a valid mobile number (10–15 digits, optional +)");
            return false;
        }

        if (!formData.location.trim()) {
            toast.error("Location is required");
            return false;
        }

        if (!formData.resume) {
            toast.error("Please upload your resume");
            return false;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(formData.resume.type)) {
            toast.error("Resume must be PDF, DOC or DOCX");
            return false;
        }

        if (formData.resume.size > 2 * 1024 * 1024) {
            toast.error("Resume must be less than 2MB");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("mobile_no", formData.mobile_no);
        data.append("location", formData.location);
        data.append("position_id", id);
        data.append("resume", formData.resume);

        const result = await postForm(data);

        if (result.success) {
            toast.success(result.data.message || "Application submitted!");
            setTimeout(() => navigate("/careers"), 2000);
        } else {
            if (result.error.includes("already applied")) {
                toast.error("You have already applied for this position.");
            } else {
                toast.error(result.error || "Something went wrong. Try again.");
            }
        }
    };

    return (
        <>      
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Job Summary */}
                <div className="bg-white p-6 rounded-xl shadow-md text-gray-900">
                    {jobLoading ? (
                        <p>Loading job details...</p>
                    ) : jobError ? (
                        <p className="text-red-500">{jobError}</p>
                    ) : job ? (
                        <>
                            <h2 className="text-2xl font-bold mb-4">{job.name}</h2>
                            <p className="text-gray-700 mb-2"><strong>Department:</strong> {job.department?.name || "N/A"}</p>
                            <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location || "N/A"}</p>
                            <p className="text-gray-700 mb-2"><strong>Experience:</strong> {job.experience || "Not specified"}</p>
                            <p className="text-gray-700 mb-2"><strong>Job Type:</strong> {job.job_type || "N/A"}</p>
                            <p className="text-gray-700 mb-2"><strong>Salary Range:</strong> {job.salary_range || "Not specified"}</p>

                            {job.responsibility && job.responsibility.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-semibold mb-1">Responsibilities:</h3>
                                    <ul className="list-disc list-inside">
                                        {job.responsibility.map((r, idx) => <li key={idx}>{r}</li>)}
                                    </ul>
                                </div>
                            )}

                            {job.requirements && job.requirements.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-semibold mb-1">Requirements:</h3>
                                    <ul className="list-disc list-inside">
                                        {job.requirements.map((r, idx) => <li key={idx}>{r}</li>)}
                                    </ul>
                                </div>
                            )}

                            {job.skills && job.skills.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="font-semibold mb-1">Skills:</h3>
                                    <ul className="list-disc list-inside">
                                        {job.skills.map((s, idx) => <li key={idx}>{s}</li>)}
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <p>No job details available.</p>
                    )}
                </div>

                {/* Application Form */}
                <div className="bg-white p-6 rounded-xl shadow-md text-gray-900">
                    <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Full Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email Address</label>
                            <input
                                type="email"
                                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Mobile Number</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your mobile number"
                                value={formData.mobile_no}
                                onChange={(e) => setFormData({ ...formData, mobile_no: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Location</label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your location"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Upload Resume</label>
                            <input
                                type="file"
                                className="w-full text-gray-900"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                    if (e.target.files.length > 0) {
                                        const file = e.target.files[0];

                                        const allowedTypes = [
                                            "application/pdf",
                                            "application/msword",
                                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                        ];

                                        if (!allowedTypes.includes(file.type)) {
                                            toast.error("Resume must be PDF, DOC or DOCX");
                                            e.target.value = null; // reset input
                                            return;
                                        }

                                        if (file.size > 2 * 1024 * 1024) {
                                            toast.error("Resume must be less than 2MB");
                                            e.target.value = null; // reset input
                                            return;
                                        }

                                        setFormData({ ...formData, resume: file });
                                    }
                                }}
                            />
                            {formData.resume && (
                                <p className="text-sm text-gray-700 mt-1">
                                    Selected file: <strong>{formData.resume.name}</strong>
                                </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 2MB)</p>
                        </div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`w-full py-2 rounded-lg text-white font-semibold transition ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {submitting ? "Submitting..." : "Submit Application"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default ApplyJob;