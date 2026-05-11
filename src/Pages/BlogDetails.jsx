import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { useGet } from "../hooks/useGet";

import logo from "../assets/images/logo.webp";

const BlogDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: blogData,
    loading,
    error,
  } = useGet(`/blogviewsingle/${id}`, {
    lazy: false,
  });

  const blog = blogData?.data;

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-full border-[3px] border-[#dbeafe] border-t-[#2563eb] animate-spin" />

          <p className="mt-5 text-[#64748b] text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          <h2 className="text-[42px] font-semibold tracking-[-0.04em] text-[#0f172a]">
            Blog Not Found
          </h2>

          <p className="mt-4 text-[#64748b] leading-8 text-[17px]">
            The article you are looking for does not exist or may have been
            removed.
          </p>

          <button
            onClick={() => navigate("/blogs")}
            className="
              mt-10
              h-12
              px-7
              rounded-2xl
              bg-[#2563eb]
              hover:bg-[#1d4ed8]
              text-white
              font-medium
              transition
            "
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}

      <section className="border-b border-[#eef2f7]">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-16">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* BACK */}
            <button
              onClick={() => navigate(-1)}
              className="
                h-11
                px-5
                rounded-full
                border
                border-[#e2e8f0]
                hover:border-[#2563eb]
                hover:text-[#2563eb]
                text-[#0f172a]
                text-sm
                font-medium
                inline-flex
                items-center
                gap-2
                transition-all
                cursor-pointer
                "
            >
              <ArrowLeft size={16} />
              Back
            </button>

            {/* CATEGORY */}
            <div
              className="
                inline-flex
                items-center
                h-10
                px-5
                rounded-full
                bg-[#eff6ff]
                text-[#2563eb]
                text-sm
                font-medium
                "
            >
              {blog.category}
            </div>
          </div>

          {/* TITLE */}
          <h4
            className="
              mt-8
              text-[42px]
              md:text-[56px]
              leading-[0.98]
              tracking-[-0.07em]
              font-semibold
              text-[#0f172a]
              max-w-5xl
            "
          >
            {blog.title}
          </h4>

          {/* SUBTITLE */}
          <p
            className="
              mt-8
              text-[20px]
              leading-[40px]
              text-[#475569]
              max-w-3xl
            "
          >
            {blog.subtitle}
          </p>

          {/* META */}
          <div className="flex items-center gap-6 mt-12 flex-wrap">
            {/* AUTHOR */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="logo"
                className="
                  h-12
                  w-12
                  rounded-full
                  object-cover
                "
              />

              <div>
                <p className="text-[#0f172a] font-semibold">Spay Fintech</p>

                <p className="text-[#94a3b8] text-sm">Premium Insights</p>
              </div>
            </div>

            <div className="h-5 w-[1px] bg-[#e2e8f0]" />

            {/* DATE */}
            <div className="flex items-center gap-2 text-[#64748b] text-sm">
              <CalendarDays size={16} />

              {new Date(blog.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <section className="px-6 pt-5 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${blog.image}`}
              alt={blog.title}
              className="
                w-full
                max-h-[650px]
                object-cover
              "
            />
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              mt-16
              text-[19px]
              leading-[44px]
              text-[#334155]
              whitespace-pre-line
              tracking-[0.01em]
            "
          >
            {blog.description}
          </div>

          {/* FOOTER */}
          <div className="mt-24 pt-10 border-t border-[#eef2f7] flex items-center justify-between flex-wrap gap-5">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="logo"
                className="
                  h-14
                  w-14
                  rounded-full
                  object-cover
                "
              />

              <div>
                <p className="font-semibold text-[#0f172a]">Spay Fintech</p>

                <p className="text-sm text-[#94a3b8] mt-1">
                  Building premium fintech experiences.
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => navigate(-1)}
                className="
                  h-12
                  px-6
                  rounded-2xl
                  border
                  border-[#e2e8f0]
                  hover:border-[#2563eb]
                  hover:text-[#2563eb]
                  text-[#0f172a]
                  font-medium
                  transition-all
                  cursor-pointer
                "
              >
                ← Back
              </button>

              <button
                onClick={() => navigate("/blogs")}
                className="
                  h-12
                  px-6
                  rounded-2xl
                  bg-[#0f172a]
                  hover:bg-black
                  text-white
                  font-medium
                  transition-all
                  cursor-pointer
                "
              >
                Explore More Blogs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
