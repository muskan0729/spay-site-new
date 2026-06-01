import React, { useMemo, useState } from "react";
import { useGet } from "../../hooks/useGet";
import { usePost, usePostForm } from "../../hooks/usePost";
import { useDelete } from "../../hooks/useDelete";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import logo from "../../assets/images/logo.webp";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [deleteId, setDeleteId] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const {
    data: blogsData,
    loading: blogsLoading,
    error,
    refetch,
  } = useGet("/blogview", { lazy: false });

  const { remove: deleteBlog } = useDelete("/blogdelete");

  const loading = blogsLoading;

  const blogs = useMemo(() => {
    if (blogsData?.data) {
      return blogsData.data;
    }

    return [];
  }, [blogsData]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesTab = activeTab === "all" || blog.status === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [blogs, search, activeTab]);

  /* ================= FUNCTIONS ================= */

  const handleDelete = async () => {
    const result = await deleteBlog(deleteId);

    if (result.success) {
      refetch();
      setDeleteId(null);
    }
  };

  {
    /* ================= STATES ================= */
  }

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    subtitle: "",
    description: "",
    category: "",
    image: null,
  });

  const { postForm: createBlog, loading: creatingBlog } =
    usePostForm("/blogadd");

  const { postForm: updateBlog, loading: updatingBlog } = usePostForm(
    `/blogupdate/${editId}`,
  );

  /* ================= CREATE BLOG ================= */

  const validateBlogForm = () => {
    const errors = {};

    if (!blogForm.title.trim()) {
      errors.title = "Title is required";
    } else if (blogForm.title.length > 255) {
      errors.title = "Title must be under 255 characters";
    }

    if (!blogForm.slug.trim()) {
      errors.slug = "Slug is required";
    }

    if (!blogForm.subtitle.trim()) {
      errors.subtitle = "Subtitle is required";
    } else if (blogForm.subtitle.length > 255) {
      errors.subtitle = "Subtitle must be under 255 characters";
    }

    if (!blogForm.category.trim()) {
      errors.category = "Category is required";
    }

    const plainText = blogForm.description.replace(/<(.|\n)*?>/g, "").trim();

    if (!plainText) {
      errors.description = "Description is required";
    }

    if (!blogForm.image && !isEdit) {
      errors.image = "Image is required";
    }

    if (blogForm.image && typeof blogForm.image !== "string") {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (!allowedTypes.includes(blogForm.image.type)) {
        errors.image = "Only JPG, JPEG and PNG files are allowed";
      }

      if (blogForm.image.size > 5 * 1024 * 1024) {
        errors.image = "Image size must be under 5MB";
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmitBlog = async () => {
    if (!validateBlogForm()) return;

    const formData = new FormData();

    formData.append("title", blogForm.title);
    formData.append("slug", blogForm.slug);
    formData.append("subtitle", blogForm.subtitle);
    formData.append("description", blogForm.description);
    formData.append("category", blogForm.category);

    if (blogForm.image && typeof blogForm.image !== "string") {
      formData.append("image", blogForm.image);
    }

    let result;

    if (isEdit) {
      formData.append("id", editId);

      result = await updateBlog(formData);
    } else {
      result = await createBlog(formData);
    }

    if (result.success) {
      refetch();

      setShowModal(false);

      setBlogForm({
        title: "",
        slug: "",
        subtitle: "",
        description: "",
        category: "",
        image: null,
      });

      setIsEdit(false);
      setEditId(null);
    }
  };

  const quillStyles = `
    .blog-editor .ql-toolbar {
      border: none !important;
      border-bottom: 1px solid #e7edf5 !important;
      padding: 14px !important;
    }

    .blog-editor .ql-container {
      border: none !important;
      font-size: 15px !important;
      font-family: Inter, sans-serif !important;
      height: auto !important;
    }

    .blog-editor .ql-editor {
      min-height: 120px !important;
      max-height: 260px !important;
      overflow-y: auto !important;

      padding: 20px !important;
      color: #0f172a !important;
      line-height: 1.9 !important;
    }

    .blog-editor .ql-editor ol {
      list-style-type: decimal !important;
      padding-left: 24px !important;
    }

    .blog-editor .ql-editor ul {
      list-style-type: disc !important;
      padding-left: 24px !important;
    }

    .blog-editor .ql-editor li {
      margin-bottom: 10px !important;
    }

    .blog-editor .ql-align-center {
      text-align: center !important;
    }

    .blog-editor .ql-align-right {
      text-align: right !important;
    }

    .blog-editor .ql-align-justify {
      text-align: justify !important;
    }
  `;

  return (
    <>
      <style>{quillStyles}</style>
      <div className="min-h-screen bg-[#f5f7fb]">
        <div className="max-w-[1500px] mx-auto px-6 py-6">
          <div
            className="
          h-[74px]
          bg-white
          border
          border-[#e7edf5]
          rounded-2xl
          px-6
          flex
          items-center
          justify-between
          shadow-[0_4px_20px_rgba(15,23,42,0.03)]
          "
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div
                className="
              h-11
              w-11
              rounded-xl
              bg-[#0066ff]
              flex
              items-center
              justify-center
              text-white
              text-lg
              font-bold
              shadow-lg
              shadow-blue-500/20
              "
              >
                B
              </div>

              <div>
                <h1 className="text-[22px] font-semibold tracking-tight text-[#0f172a]">
                  Blog Management
                </h1>

                <p className="text-sm text-gray-400 mt-0.5">
                  Manage all published content
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setShowModal(true);

                  setIsEdit(false);
                  setEditId(null);

                  setBlogForm({
                    title: "",
                    slug: "",
                    subtitle: "",
                    description: "",
                    category: "",
                    image: null,
                  });
                }}
                className="
              h-11
              px-5
              rounded-xl
              bg-[#0066ff]
              text-white
              text-sm
              font-medium
              hover:bg-[#0052cc]
              shadow-lg
              shadow-blue-500/20
              transition
              "
              >
                + New Blog
              </button>
            </div>
          </div>

          {/* ================= STATS ================= */}

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
            {[
              {
                title: "Total Blogs",
                value: blogs.length,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
              bg-white
              border
              border-[#e8edf5]
              rounded-2xl
              px-5
              py-5
              shadow-[0_4px_20px_rgba(15,23,42,0.03)]
              "
              >
                <p className="text-sm text-gray-400">{item.title}</p>

                <h2 className="text-[30px] leading-none font-semibold text-[#0f172a] mt-4 tracking-tight">
                  {item.value}
                </h2>
              </div>
            ))}
          </div>

          {/* ================= FILTER BAR ================= */}

          <div
            className="
            mt-5
            bg-white
            border
            border-[#e8edf5]
            rounded-2xl
            px-5
            py-4
            flex
            flex-col
            xl:flex-row
            xl:items-center
            justify-between
            gap-4
            shadow-[0_4px_20px_rgba(15,23,42,0.03)]
            "
          >
            {/* LEFT */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                h-11
                w-full
                md:w-[280px]
                rounded-xl
                border
                border-[#e7edf5]
                bg-[#f8fafc]
                px-4
                text-sm
                outline-none
                focus:border-[#0066ff]
                transition
                "
              />
            </div>
          </div>

          {/* ================= ERROR ================= */}

          {error && (
            <div className="mt-5 bg-red-50 border border-red-100 text-red-600 rounded-xl px-5 py-4 text-sm">
              {error}
            </div>
          )}

          {/* ================= BLOG GRID ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-9 mt-8 pl-5 pr-5">
            {loading ? (
              <div className="col-span-full">
                <div
                  className="
                  bg-white
                  border
                  border-[#e8edf5]
                  rounded-[28px]
                  p-10
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-[0_4px_20px_rgba(15,23,42,0.03)]
                "
                >
                  <div
                    className="
                    h-12
                    w-12
                    rounded-full
                    border-[3px]
                    border-[#dbeafe]
                    border-t-[#2563eb]
                    animate-spin
                  "
                  />

                  <h3 className="mt-5 text-[18px] font-semibold text-[#0f172a]">
                    Loading Blogs...
                  </h3>

                  <p className="mt-2 text-sm text-[#94a3b8]">
                    Fetching latest blog articles
                  </p>
                </div>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="col-span-full">
                <div
                  className="
                  bg-white
                  border
                  border-[#e8edf5]
                  rounded-[28px]
                  p-10
                  text-center
                  shadow-[0_4px_20px_rgba(15,23,42,0.03)]
                "
                >
                  <h3 className="text-[20px] font-semibold text-[#0f172a]">
                    No Blogs Found
                  </h3>

                  <p className="mt-2 text-sm text-[#94a3b8]">
                    Try changing search filters or create a new blog.
                  </p>
                </div>
              </div>
            ) : (
              filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => {
                    setSelectedBlog(blog);
                    setShowViewModal(true);
                  }}
                  className="
                  group
                  bg-white
                  border
                  border-[#e9edf3]
                  rounded-[22px]
                  overflow-hidden
                  hover:border-[#d8e2f0]
                  hover:shadow-[0_12px_40px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-300
                  cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_URL}/${blog.image}`}
                      alt={blog.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-[1.015]
                        transition-transform
                        duration-700
                        "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    {/* TITLE */}
                    <h2
                      className="
                    text-[22px]
                    leading-[31px]
                    tracking-[-0.02em]
                    font-medium
                    text-[#111827]
                    line-clamp-3
                    group-hover:text-[#2563eb]
                    transition-colors
                    duration-300
                    "
                    >
                      {blog.title}
                    </h2>

                    {/* META */}
                    <div className="flex items-center gap-2 mt-2 text-[11px] uppercase tracking-[0.14em] text-[#94a3b8] font-medium">
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

                    {/* SUBTITLE */}
                    <p
                      className="
                    mt-3
                    text-[15px]
                    leading-[28px]
                    text-[#475569]
                    line-clamp-2
                    "
                    >
                      {blog.subtitle}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-3 pt-4 border-t border-[#eef2f6]">
                      {/* AUTHOR */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                          {/* LOGO */}
                          <div
                            className="
                            h-10
                            w-10
                            rounded-2xl
                            bg-[#f8fafc]
                            border
                            border-[#e7edf5]
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            "
                          >
                            <img
                              src={logo}
                              alt="company"
                              className="h-10 object-contain"
                            />
                          </div>

                          {/* COMPANY */}
                          <div className="leading-tight">
                            <p className="text-[13px] font-semibold tracking-tight text-[#0f172a]">
                              Spay Fintech
                            </p>

                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-1 w-1 rounded-full bg-[#cbd5e1]" />

                              <p className="text-[11px] text-[#94a3b8]">
                                Published article
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowModal(true);

                            setIsEdit(true);
                            setEditId(blog.id);

                            setBlogForm({
                              title: blog.title,
                              slug: blog.slug || "",
                              subtitle: blog.subtitle,
                              description: blog.description,
                              category: blog.category || "",
                              image: blog.image,
                            });
                          }}
                          className="
                          h-9
                          px-4
                          rounded-full
                          bg-[#f8fafc]
                          hover:bg-[#f1f5f9]
                          border
                          border-[#e5e7eb]
                          text-[#0f172a]
                          text-[12px]
                          font-medium
                          transition-all
                          "
                        >
                          Edit
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteId(blog.id);
                          }}
                          className="
                          h-9
                          w-9
                          rounded-full
                          bg-[#fff5f5]
                          hover:bg-[#ffecec]
                          border
                          border-[#fee2e2]
                          text-[#ef4444]
                          text-sm
                          flex
                          items-center
                          justify-center
                          transition-all
                          "
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ================= CREATE BLOG MODAL ================= */}

        {showModal && (
          <div
            className="
            fixed
            inset-0
            z-50
            bg-black/60
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            overflow-y-auto
            "
          >
            <div
              className="
                w-full
                max-w-2xl
                bg-white
                rounded-[28px]
                border
                border-[#e9edf3]
                shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                overflow-hidden
                "
            >
              {/* HEADER */}
              <div className="px-7 py-6 border-b border-[#e8eef7] bg-[#f8fbff] flex items-center justify-between">
                <div>
                  <h2 className="text-[24px] font-semibold tracking-tight text-[#0445d1]">
                    {isEdit ? "Update Blog" : "Create New Blog"}
                  </h2>

                  <p className="text-sm text-[#64748b] mt-1">
                    Publish a new article to your platform
                  </p>
                </div>

                <button
                  onClick={() => {
                    setShowModal(false);

                    setBlogForm({
                      title: "",
                      slug: "",
                      subtitle: "",
                      description: "",
                      category: "",
                      image: null,
                    });
                  }}
                  className="
                    h-10
                    w-10
                    rounded-full
                    hover:bg-[#f8fafc]
                    text-[#64748b]
                    text-xl
                    transition
                    cursor-pointer
                    "
                >
                  ×
                </button>
              </div>

              {/* BODY */}
              <div className="p-7 space-y-5 max-h-[70vh] overflow-y-auto">
                {/* TITLE */}
                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Blog Title
                  </label>

                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(e) =>
                      setBlogForm({
                        ...blogForm,
                        title: e.target.value,
                      })
                    }
                    placeholder="Enter blog title..."
                    className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-[#e7edf5]
                    bg-[#f8fafc]
                    text-[14px]
                    outline-none
                    focus:border-[#2563eb]
                    focus:ring-4
                    focus:ring-blue-100
                    transition
                    "
                  />
                  {formErrors.title && (
                    <p className="mt-2 text-[13px] text-red-500">
                      {formErrors.title}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Slug
                  </label>

                  <input
                    type="text"
                    value={blogForm.slug}
                    onChange={(e) =>
                      setBlogForm({
                        ...blogForm,
                        slug: e.target.value
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, ""),
                      })
                    }
                    placeholder="Enter slug url..."
                    className="
                      w-full
                      h-12
                      px-4
                      rounded-xl
                      border
                      border-[#e7edf5]
                      bg-[#f8fafc]
                      text-[14px]
                      outline-none
                      focus:border-[#2563eb]
                      focus:ring-4
                      focus:ring-blue-100
                      transition
                    "
                  />
                  {formErrors.title && <p>{formErrors.title}</p>}
                </div>

                {/* SUBTITLE */}
                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Subtitle
                  </label>

                  <input
                    type="text"
                    value={blogForm.subtitle}
                    onChange={(e) =>
                      setBlogForm({
                        ...blogForm,
                        subtitle: e.target.value,
                      })
                    }
                    placeholder="Enter subtitle..."
                    className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-[#e7edf5]
                    bg-[#f8fafc]
                    text-[14px]
                    outline-none
                    focus:border-[#2563eb]
                    focus:ring-4
                    focus:ring-blue-100
                    transition
                    "
                  />
                  {formErrors.subtitle && (
                    <p className="mt-2 text-[13px] text-red-500">
                      {formErrors.subtitle}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Category
                  </label>

                  <select
                    value={blogForm.category}
                    onChange={(e) =>
                      setBlogForm({
                        ...blogForm,
                        category: e.target.value,
                      })
                    }
                    className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-[#e7edf5]
                    bg-[#f8fafc]
                    text-[14px]
                    outline-none
                    focus:border-[#2563eb]
                    focus:ring-4
                    focus:ring-blue-100
                    transition
                  "
                  >
                    <option value="">Select Category</option>
                    <option value="Fintech">Fintech</option>
                    <option value="Payments">Payments</option>
                    <option value="Backend">Backend</option>
                    <option value="AI">AI</option>
                    <option value="Technology">Technology</option>
                  </select>
                  {formErrors.category && (
                    <p className="mt-2 text-[13px] text-red-500">
                      {formErrors.category}
                    </p>
                  )}
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Description
                  </label>

                  <div
                    className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#e7edf5]
                    bg-white
                    focus-within:ring-4
                    focus-within:ring-blue-100
                    transition
                  "
                  >
                    <ReactQuill
                      theme="snow"
                      value={blogForm.description}
                      onChange={(value) =>
                        setBlogForm({
                          ...blogForm,
                          description: value,
                        })
                      }
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, false] }],
                          ["bold", "italic", "underline"],
                          [{ color: [] }, { background: [] }],
                          [{ list: "ordered" }, { list: "bullet" }],
                          [{ align: [] }],
                          ["link"],
                          ["clean"],
                        ],
                      }}
                      placeholder="Write amazing blog content..."
                      className="blog-editor"
                    />
                  </div>
                  {formErrors.description && (
                    <p className="mt-2 text-[13px] text-red-500">
                      {formErrors.description}
                    </p>
                  )}
                </div>

                {/* IMAGE */}
                <div>
                  <label className="text-[13px] font-medium text-[#0f172a] block mb-2">
                    Upload Image
                  </label>

                  <label
                    className="
                    relative
                    h-[150px]
                    rounded-2xl
                    border-2
                    border-dashed
                    border-[#dbe7f5]
                    bg-[#f5f9ff]
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    overflow-hidden
                    hover:border-[#bfd3ec]
                    transition
                    "
                  >
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        setBlogForm({
                          ...blogForm,
                          image: e.target.files[0],
                        })
                      }
                    />

                    {/* PREVIEW */}
                    {blogForm.image ? (
                      <div className="relative w-full h-full">
                        <img
                          src={
                            typeof blogForm.image === "string"
                              ? `${import.meta.env.VITE_IMAGE_URL}/${blogForm.image}`
                              : URL.createObjectURL(blogForm.image)
                          }
                          alt="preview"
                          className="
                            w-full
                            h-full
                            object-cover
                        "
                        />

                        {/* OVERLAY */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-black/20
                            opacity-0
                            hover:opacity-100
                            transition
                            flex
                            items-center
                            justify-center
                            "
                        >
                          <div
                            className="
                            h-10
                            px-4
                            rounded-full
                            bg-white/90
                            backdrop-blur-xl
                            text-[13px]
                            font-medium
                            text-[#0f172a]
                            flex
                            items-center
                            "
                          >
                            Change Image
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <div
                          className="
                            h-11
                            w-11
                            rounded-full
                            bg-white
                            border
                            border-[#dbe7f5]
                            flex
                            items-center
                            justify-center
                            text-lg
                            text-[#2563eb]
                            "
                        >
                          +
                        </div>

                        <p className="text-[14px] font-medium text-[#0f172a] mt-4">
                          Upload cover image
                        </p>

                        <p className="text-[12px] text-[#94a3b8] mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    )}
                  </label>
                  {formErrors.image && (
                    <p className="mt-2 text-[13px] text-red-500">
                      {formErrors.image}
                    </p>
                  )}
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-7 py-5 border-t border-[#eef2f6] flex items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);

                    setBlogForm({
                      title: "",
                      slug: "",
                      subtitle: "",
                      description: "",
                      category: "",
                      image: null,
                    });
                  }}
                  className="
                    h-11
                    px-5
                    rounded-xl
                    border
                    border-[#e5e7eb]
                    bg-white
                    text-[14px]
                    font-medium
                    text-[#0f172a]
                    hover:bg-[#f8fafc]
                    transition
                    "
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmitBlog}
                  disabled={creatingBlog || updatingBlog}
                  className="
                    h-11
                    px-6
                    rounded-xl
                    bg-[#2563eb]
                    hover:bg-[#1d4ed8]
                    shadow-lg
                    shadow-blue-500/20
                    text-white
                    text-[14px]
                    font-medium
                    transition
                    disabled:opacity-50
                    cursor-pointer
                    "
                >
                  {isEdit
                    ? updatingBlog
                      ? "Updating..."
                      : "Update Blog"
                    : creatingBlog
                      ? "Publishing..."
                      : "Publish Blog"}
                </button>
              </div>
            </div>
          </div>
        )}

        {showViewModal && selectedBlog && (
          <div
            className="
            fixed
            inset-0
            z-50
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-5
            "
            onClick={() => setShowViewModal(false)}
          >
            <div
              className="
                w-full
                max-w-5xl
                max-h-[92vh]
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-[0_25px_100px_rgba(15,23,42,0.22)]
                border
                border-white/40
                animate-[fadeIn_.25s_ease]
                "
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE */}
              <div className="h-[240px] overflow-hidden sticky top-0 bg-black">
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}/${selectedBlog.image}`}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                    p-8
                    overflow-y-auto
                    max-h-[calc(102vh-320px)]
                    scrollbar-thin
                    scrollbar-thumb-[#cbd5e1]
                    scrollbar-track-transparent
                "
              >
                {/* TOP */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.2em] text-[#94a3b8]">
                      Blog #{selectedBlog.id}
                    </p>

                    <h1 className="text-[34px] leading-[44px] font-semibold text-[#0f172a] mt-2">
                      {selectedBlog.title}
                    </h1>
                  </div>

                  <button
                    onClick={() => setShowViewModal(false)}
                    className="
                    h-11
                    w-11
                    rounded-full
                    bg-[#f8fafc]
                    hover:bg-[#eef2f7]
                    text-xl
                    "
                  >
                    ×
                  </button>
                </div>

                {/* SUBTITLE */}
                <p className="mt-5 text-[18px] leading-[34px] text-[#475569]">
                  {selectedBlog.subtitle}
                </p>

                {/* META */}
                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-11 w-11 rounded-full object-cover border border-[#e2e8f0]"
                  />

                  <div>
                    <p className="text-[14px] font-semibold text-[#0f172a]">
                      Spay Fintech
                    </p>

                    <p className="text-[12px] text-[#94a3b8]">
                      {new Date(selectedBlog.created_at).toLocaleDateString(
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

                {/* DESCRIPTION */}
                <div
                  className="
                mt-8
                text-[17px]
                leading-[38px]
                text-[#334155]
                whitespace-pre-line
                tracking-[0.01em]
                "
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedBlog.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {deleteId && (
          <div
            className="
            fixed
            inset-0
            z-50
            bg-black/30
            backdrop-blur-[3px]
            flex
            items-center
            justify-center
            p-4
          "
          >
            <div
              className="
              w-full
              max-w-[380px]
              bg-white
              rounded-[24px]
              p-6
              border
              border-[#eef2f7]
              shadow-[0_20px_60px_rgba(15,23,42,0.12)]
              animate-[fadeIn_.2s_ease]
            "
            >
              {/* TOP */}
              <div className="flex items-start gap-4">
                <div
                  className="
                  h-11
                  w-11
                  rounded-full
                  bg-red-50
                  flex
                  items-center
                  justify-center
                  text-red-500
                  text-lg
                  shrink-0
                "
                >
                  🗑
                </div>

                <div>
                  <h2 className="text-[18px] font-semibold text-[#0f172a]">
                    Delete blog?
                  </h2>

                  <p className="text-[14px] leading-6 text-[#64748b] mt-1">
                    This action cannot be undone.
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  onClick={() => setDeleteId(null)}
                  className="
                  h-10
                  px-5
                  rounded-xl
                  border
                  border-[#e2e8f0]
                  text-[14px]
                  font-medium
                  text-[#0f172a]
                  hover:bg-[#f8fafc]
                  transition
                "
                >
                  Cancel
                </button>

                <button
                  onClick={handleDelete}
                  className="
                  h-10
                  px-5
                  rounded-xl
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  text-[14px]
                  font-medium
                  transition
                "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
