import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { useGet } from "../hooks/useGet";

import logo from "../assets/images/logo.webp";

const BlogDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const {
    data: blogData,
    loading,
    error,
  } = useGet(`/blogviewsingle/${slug}`, {
    lazy: false,
  });

  const { data: allBlogsData } = useGet("/blogview", {
    lazy: false,
  });

  const blog = blogData?.data;

  const relatedBlogs =
    allBlogsData?.data
      ?.filter((item) => item.slug !== blog?.slug)
      ?.slice(0, 3) || [];

  useEffect(() => {
    const headings = document.querySelectorAll(
      ".blog-content h1, .blog-content h2, .blog-content h3",
    );

    headings.forEach((heading, index) => {
      heading.id = `heading-${index}`;
    });
  }, [blog]);

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

  const createTOC = () => {
    if (!blog?.description) return [];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = blog.description;

    const headings = tempDiv.querySelectorAll("h1, h2, h3");

    return Array.from(headings).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent,
    }));
  };

  const tableOfContents = createTOC();

  const blogStyles = `
    .blog-content {
      font-family: Inter, sans-serif;
    }

    /* LISTS */

    .blog-content ul {
      list-style-type: disc !important;
      padding-left: 22px !important;
      margin: 14px 0 !important;
    }

    .blog-content ol {
      list-style-type: decimal !important;
      padding-left: 22px !important;
      margin: 14px 0 !important;
    }

    .blog-content li {
      margin-bottom: 8px !important;
      line-height: 30px !important;
    }

    /* ALIGN */

    .blog-content .ql-align-center {
      text-align: center !important;
    }

    .blog-content .ql-align-right {
      text-align: right !important;
    }

    .blog-content .ql-align-justify {
      text-align: justify !important;
    }

    /* TEXT */

    .blog-content strong {
      font-weight: 700 !important;
      color: #0f172a !important;
    }

    .blog-content em {
      font-style: italic !important;
    }

    .blog-content u {
      text-decoration: underline !important;
    }

    .blog-content a {
      color: #2563eb !important;
      text-decoration: none !important;
      font-weight: 500 !important;
    }

    .blog-content a:hover {
      text-decoration: underline !important;
    }

    /* HEADINGS */

    .blog-content h1,
    .blog-content h2,
    .blog-content h3 {
      scroll-margin-top: 120px;
    }

    .blog-content h1 {
      font-size: 30px !important;
      line-height: 40px !important;
      font-weight: 700 !important;
      color: #0f172a !important;
      margin: 30px 0 14px !important;
      letter-spacing: -0.03em !important;
    }

    .blog-content h2 {
      font-size: 24px !important;
      line-height: 34px !important;
      font-weight: 700 !important;
      color: #0f172a !important;
      margin: 26px 0 12px !important;
      letter-spacing: -0.02em !important;
    }

    .blog-content h3 {
      font-size: 20px !important;
      line-height: 30px !important;
      font-weight: 600 !important;
      color: #0f172a !important;
      margin: 22px 0 10px !important;
    }

    /* PARAGRAPH */

    .blog-content p {
      margin-bottom: 12px !important;
      line-height: 31px !important;
    }

    /* BLOCKQUOTE */

    .blog-content blockquote {
      border-left: 4px solid #2563eb !important;
      padding-left: 18px !important;
      margin: 18px 0 !important;
      color: #475569 !important;
      font-style: italic !important;
    }

    /* IMAGE */

    .blog-content img {
      border-radius: 18px !important;
      margin: 24px 0 !important;
    }

    /* TABLE */

    .blog-content table {
      width: 100% !important;
      border-collapse: collapse !important;
      margin: 20px 0 !important;
    }

    .blog-content table td,
    .blog-content table th {
      border: 1px solid #e2e8f0 !important;
      padding: 10px !important;
    }
  `;

  return (
    <>
      <style>{blogStyles}</style>
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
            <div className="overflow-hidden mb-10">
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

            {tableOfContents.length > 0 && (
              <div
                className="
                  mb-16
                  rounded-[30px]
                  border
                  border-[#dbeafe]
                  bg-gradient-to-br
                  from-[#f8fbff]
                  via-white
                  to-[#f1f7ff]
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(37,99,235,0.05)]
                "
              >
                {/* HEADER */}
                <div
                  className="
                    h-[62px]
                    px-7
                    border-b
                    border-[#e5edf8]
                    bg-gradient-to-r
                    from-[#2563eb]
                    to-[#3b82f6]
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        h-8
                        w-8
                        rounded-full
                        bg-white/20
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        text-white
                        text-[13px]
                        font-semibold
                      "
                    >
                      #
                    </div>

                    <h3
                      className="
                        text-white
                        text-[15px]
                        tracking-[0.02em]
                        font-semibold
                      "
                    >
                      Table of Contents
                    </h3>
                  </div>

                  <div
                    className="
                      h-8
                      px-3
                      rounded-full
                      bg-white/15
                      text-white
                      text-[12px]
                      font-medium
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {tableOfContents.length} Sections
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const element = document.getElementById(item.id);

                          if (element) {
                            const offset = 120;

                            const top =
                              element.getBoundingClientRect().top +
                              window.pageYOffset -
                              offset;

                            window.scrollTo({
                              top,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="
                          group
                          w-full
                          flex
                          items-start
                          gap-4
                          px-4
                          py-3
                          rounded-2xl
                          hover:bg-[#eff6ff]
                          transition-all
                          duration-200
                          cursor-pointer
                          text-left
                        "
                      >
                        {/* NUMBER */}
                        <div
                          className="
                            h-7
                            min-w-[28px]
                            px-2
                            rounded-full
                            bg-[#eff6ff]
                            group-hover:bg-[#2563eb]
                            text-[#2563eb]
                            group-hover:text-white
                            text-[12px]
                            font-semibold
                            flex
                            items-center
                            justify-center
                            transition-all
                            mt-[2px]
                          "
                        >
                          {index + 1}
                        </div>

                        {/* TEXT */}
                        <p
                          className="
                            text-[15px]
                            leading-[28px]
                            text-[#334155]
                            group-hover:text-[#2563eb]
                            transition-colors
                            font-medium
                          "
                        >
                          {item.text}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DESCRIPTION */}
            <div
              className="
                blog-content
                mt-10
                text-[15px]
                leading-[31px]
                text-[#334155]
                tracking-[0.005em]
              "
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.description,
                }}
              />
            </div>

            {/* ================= RELATED POSTS ================= */}

            {relatedBlogs.length > 0 && (
              <div className="mt-24">
                <div className="text-center mb-12">
                  <h2
                    className="
                      text-[34px]
                      leading-[42px]
                      font-bold
                      tracking-[-0.03em]
                      text-[#0f172a]
                    "
                  >
                    Related Posts
                  </h2>

                  <div className="w-12 h-[2px] bg-[#0f172a] mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {relatedBlogs.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => navigate(`/blogs/${item.slug}`)}
                      className="
                        group
                        cursor-pointer
                      "
                    >
                      <div
                        className="
                          overflow-hidden
                          bg-[#f8fafc]
                        "
                      >
                        <img
                          src={`${import.meta.env.VITE_IMAGE_URL}/${item.image}`}
                          alt={item.title}
                          className="
                            w-full
                            h-[245px]
                            object-cover
                            group-hover:scale-[1.02]
                            transition-transform
                            duration-500
                          "
                        />
                      </div>

                      <div className="pt-6">
                        <h3
                          className="
                            text-[20px]
                            leading-[38px]
                            font-semibold
                            text-[#0f172a]
                            tracking-[-0.02em]
                            transition-colors
                            duration-300
                            group-hover:text-[#2563eb]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-5
                            text-[12px]
                            uppercase
                            tracking-[0.18em]
                            text-[#94a3b8]
                            font-medium
                          "
                        >
                          {new Date(item.created_at).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
    </>
  );
};

export default BlogDetails;
