import React, { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";
import { usePost } from "../../hooks/usePost";
import { usePut } from "../../hooks/usePut";
import { useDelete } from "../../hooks/useDelete";

const Users = () => {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    role: "user",
    password: "",
  });

  /* ================= FETCH USERS ================= */
  const { data, loading, error, refetch } = useGet("/users", {
    lazy: true,
  });

  const { post } = usePost("/users");
  const { put } = usePut("/users");
  const { remove } = useDelete("/users");

  useEffect(() => {
    refetch({
      search,
      role: filterRole !== "all" ? filterRole : undefined,
    });
  }, [search, filterRole]);

  const users = data?.data || [];

  /* ================= SAVE USER ================= */
  const handleSaveUser = async () => {
    if (!userForm.name || !userForm.email) {
      alert("Name and Email are required");
      return;
    }

    let response;

    if (editingUser) {
      response = await put(editingUser.id, userForm);
    } else {
      response = await post(userForm);
    }

    if (response.success) {
      await refetch();
      resetModal();
    } else {
      alert(response.error?.message || "Something went wrong");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    const response = await remove(id);

    if (response.success) {
      await refetch();
    } else {
      alert("Delete failed");
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUserForm({
      name: user.name,
      email: user.email,
      role: user.role,
      password: "",
    });
    setShowModal(true);
  };

  const resetModal = () => {
    setUserForm({
      name: "",
      email: "",
      role: "user",
      password: "",
    });
    setEditingUser(null);
    setShowModal(false);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
        Users Management
      </h2>

      {/* ================= FILTER SECTION ================= */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border mb-6 flex flex-col md:flex-row gap-4 md:items-center">
        <input
          type="text"
          placeholder="Search user..."
          className="border rounded-xl px-4 py-2 w-full sm:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl px-4 py-2 w-full sm:w-48 focus:ring-2 focus:ring-blue-500 outline-none"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button
          onClick={() => setShowModal(true)}
          className="md:ml-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
        >
          + Add User
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading users...
          </div>
        ) : error ? (
          <div className="p-6 text-center text-red-500">
            {error}
          </div>
        ) : (
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-gray-100 text-sm uppercase text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-medium">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4 capitalize">{user.role}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              {editingUser ? "Edit User" : "Add User"}
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="border w-full p-2 rounded mb-3"
              value={userForm.name}
              onChange={(e) =>
                setUserForm({ ...userForm, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border w-full p-2 rounded mb-3"
              value={userForm.email}
              onChange={(e) =>
                setUserForm({ ...userForm, email: e.target.value })
              }
            />

            {!editingUser && (
              <input
                type="password"
                placeholder="Password"
                className="border w-full p-2 rounded mb-3"
                value={userForm.password}
                onChange={(e) =>
                  setUserForm({ ...userForm, password: e.target.value })
                }
              />
            )}

            <select
              className="border w-full p-2 rounded mb-4"
              value={userForm.role}
              onChange={(e) =>
                setUserForm({ ...userForm, role: e.target.value })
              }
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={resetModal}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveUser}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;