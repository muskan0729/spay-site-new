import React, { useMemo, useState } from "react";
import { useGet } from "../hooks/useGet";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const AllBlogs = () => {
  const navigate = useNavigate();

  const {
    data: blogsData,
    loading,
    error,
  } = useGet("/blogview", { lazy: false });

  const blogs = useMemo(() => {
    if (blogsData?.data) {
      return blogsData.data;
    }

    return [];
  }, [blogsData]);

  const featuredBlog = blogs?.[0];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" ? true : blog.category === selectedCategory;

    const matchesSearch =
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.subtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 9;

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-[#f5f7fb] overflow-hidden">
      {/* ================= HERO ================= */}

      <Helmet>
              <title>Spay Fintech | Fintech & Digital Payment Blog India 2026</title>
              <link rel="canonical" href="https://spay.live/about-us" />
              <meta  name="robots" content="index, follow, max-image-preview:large" />
              <meta
                name="description"
                content="Read Spay Fintech's blog for the latest news on UPI payments, payment gateway integrations, AEPS, BBPS & digital payment innovations helping Indian startups."
              />
            </Helmet>

      <section className="relative px-6 pt-24 pb-16">
        {/* BG BLUR */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-200/30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-[#e2e8f0]
              shadow-sm
              text-sm
              text-[#2563eb]
              font-medium
            "
          >
            Blogs & Insights
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-7
              text-[32px]
              md:text-[62px]
              leading-[1.05]
              font-semibold
              tracking-[-0.05em]
              text-[#0f172a]
              max-w-4xl
            "
          >
            Explore Fintech, Payments, Technology & Premium Product Stories.
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-7
              text-[18px]
              leading-[34px]
              text-[#475569]
              max-w-3xl
            "
          >
            Discover premium blogs focused on digital infrastructure,
            scalability, payments, AI, backend systems and modern product
            experience.
          </p>

          {/* SEARCH */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles, fintech, payments..."
              className="
                flex-1
                h-14
                px-6
                rounded-2xl
                border
                border-[#dbe4f0]
                bg-white/90
                backdrop-blur-xl
                text-[15px]
                outline-none
                focus:border-[#2563eb]
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
              "
            />

            <button
              onClick={() => {
                document
                  .getElementById("latest-articles")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                h-14
                px-8
                rounded-2xl
                bg-[#2563eb]
                hover:bg-[#1d4ed8]
                text-white
                font-medium
                shadow-xl
                shadow-blue-500/20
                transition-all
                cursor-pointer
              "
            >
              Explore Blogs
            </button>
          </div>
        </div>
      </section>

      {/* ================= LOADING ================= */}

      {loading && (
        <div className="text-center py-20 text-[#64748b] text-lg">
          Loading blogs...
        </div>
      )}

      {/* ================= ERROR ================= */}

      {error && (
        <div className="text-center py-20 text-red-500 text-lg">{error}</div>
      )}

      {/* ================= FEATURED BLOG ================= */}

      {!loading && featuredBlog && (
        <section className="px-6 pb-10">
          <div
            className="
              max-w-7xl
              mx-auto
              rounded-[36px]
              overflow-hidden
              bg-white
              border
              border-[#e2e8f0]
              shadow-[0_25px_80px_rgba(15,23,42,0.05)]
              grid
              lg:grid-cols-2
            "
          >
            {/* IMAGE */}
            <div className="relative h-[420px] lg:h-full overflow-hidden">
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/${featuredBlog.image}`}
                alt={featuredBlog.title}
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  w-fit
                  px-4
                  py-2
                  rounded-full
                  bg-[#eff6ff]
                  text-[#2563eb]
                  text-sm
                  font-medium
                "
              >
                Featured Article
              </div>

              <h2
                className="
                  mt-6
                  text-[36px]
                  leading-[48px]
                  font-semibold
                  tracking-[-0.03em]
                  text-[#0f172a]
                  line-clamp-4
                "
              >
                {featuredBlog.title}
              </h2>

              <p
                className="
                  mt-6
                  text-[17px]
                  leading-[34px]
                  text-[#475569]
                  line-clamp-3
                "
              >
                {featuredBlog.subtitle}
              </p>

              <div className="flex items-center gap-3 mt-8 text-sm text-[#94a3b8]">
                <span>
                  {new Date(featuredBlog.created_at).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </span>

                <div className="h-1 w-1 rounded-full bg-[#cbd5e1]" />

                <span>{featuredBlog.category}</span>
              </div>

              <button
                onClick={() => navigate(`/blogs/${featuredBlog.slug}`)}
                className="
                  mt-10
                  h-14
                  w-fit
                  px-7
                  rounded-2xl
                  bg-[#0f172a]
                  hover:bg-black
                  text-white
                  font-medium
                  transition-all
                  cursor-pointer
                "
              >
                Read Full Article
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ================= BLOG GRID ================= */}

      {!loading && (
        <section className="px-6 pb-24 pt-10">
          <div className="max-w-6xl mx-auto">
            {/* TOP */}
            <div
              id="latest-articles"
              className="flex items-center justify-between gap-4 flex-wrap mb-12"
            >
              <div>
                <h2
                  className="
                    text-[34px]
                    font-semibold
                    tracking-[-0.03em]
                    text-[#0f172a]
                  "
                >
                  Latest Articles
                </h2>

                <p className="mt-2 text-[#64748b] text-[16px]">
                  Curated premium blogs and fintech insights.
                </p>
              </div>

              {/* FILTERS */}
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  "All",
                  ...new Set(
                    blogs.map((blog) => blog.category).filter(Boolean),
                  ),
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(item);
                      setCurrentPage(1);
                    }}
                    className={`
                      h-11
                      px-5
                      rounded-full
                      text-sm
                      font-medium
                      transition-all
                      ${
                        selectedCategory === item
                          ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/20"
                          : "bg-white border border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] cursor-pointer"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* EMPTY */}
            {filteredBlogs.length === 0 && (
              <div
                className="
                  bg-white
                  border
                  border-[#e2e8f0]
                  rounded-[32px]
                  py-24
                  text-center
                "
              >
                <h2 className="text-[30px] font-semibold text-[#0f172a]">
                  No Matching Blogs
                </h2>

                <p className="mt-3 text-[#64748b]">
                  Blogs will appear here once published.
                </p>
              </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => navigate(`/blogs/${blog.slug}`)}
                  className="
                    group
                    bg-white
                    border
                    border-[#e2e8f0]
                    rounded-[30px]
                    overflow-hidden
                    hover:-translate-y-1
                    hover:shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/${blog.image}`}
                      alt={blog.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-105
                        transition
                        duration-700
                      "
                    />

                    {/* BADGE */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="
                          h-9
                          px-4
                          rounded-full
                          bg-white/90
                          backdrop-blur-xl
                          text-[12px]
                          font-medium
                          text-[#0f172a]
                          inline-flex
                          items-center
                        "
                      >
                        Blog #{blog.id}
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[13px] text-[#94a3b8] mb-4">
                      <span>
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>

                      <div className="h-1 w-1 rounded-full bg-[#cbd5e1]" />

                      <span>{blog.category}</span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        text-[25px]
                        leading-[36px]
                        font-semibold
                        tracking-[-0.03em]
                        text-[#0f172a]
                        group-hover:text-[#2563eb]
                        transition-colors
                        line-clamp-3
                      "
                    >
                      {blog.title}
                    </h3>

                    {/* SUBTITLE */}
                    <p
                      className="
                        mt-4
                        text-[15px]
                        leading-[30px]
                        text-[#64748b]
                        line-clamp-2
                      "
                    >
                      {blog.subtitle}
                    </p>

                    {/* FOOTER */}
                    <div className="mt-4 pt-5 border-t border-[#eef2f7] flex items-center justify-between">
                      {/* AUTHOR */}
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            h-11
                            w-11
                            rounded-2xl
                            bg-[#f8fafc]
                            border
                            border-[#e2e8f0]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                          "
                        >
                          <img
                            src={logo}
                            alt="logo"
                            className="h-6 object-contain"
                          />
                        </div>

                        <div>
                          <p className="text-[14px] font-semibold text-[#0f172a]">
                            Spay Fintech
                          </p>

                          <p className="text-[12px] text-[#94a3b8]">
                            Premium Insights
                          </p>
                        </div>
                      </div>

                      {/* BUTTON */}
                      <button
                        className="
                          h-11
                          px-5
                          rounded-xl
                          bg-[#f8fafc]
                          hover:bg-[#eff6ff]
                          border
                          border-[#e2e8f0]
                          text-[#0f172a]
                          hover:text-[#2563eb]
                          text-sm
                          font-medium
                          transition-all
                          cursor-pointer
                        "
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-14 flex-wrap">
                {/* PREV */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="
                    h-11
                    px-5
                    rounded-xl
                    border
                    border-[#e2e8f0]
                    bg-white
                    text-sm
                    font-medium
                    text-[#0f172a]
                    hover:border-[#2563eb]
                    hover:text-[#2563eb]
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                  "
                >
                  Previous
                </button>

                {/* PAGE NUMBERS */}
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`
                        h-11
                        w-11
                        rounded-xl
                        text-sm
                        font-medium
                        transition-all
                        ${
                          currentPage === page
                            ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/20"
                            : "bg-white border border-[#e2e8f0] text-[#0f172a] hover:border-[#2563eb] hover:text-[#2563eb]"
                        }
                      `}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* NEXT */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="
                    h-11
                    px-5
                    rounded-xl
                    border
                    border-[#e2e8f0]
                    bg-white
                    text-sm
                    font-medium
                    text-[#0f172a]
                    hover:border-[#2563eb]
                    hover:text-[#2563eb]
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                  "
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default AllBlogs;
