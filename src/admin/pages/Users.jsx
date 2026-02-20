import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    role: "HR",
    status: "active",
  });

  /* ================= FETCH USERS ================= */
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // 🔁 Replace with API
    const demoUsers = [
      {
        id: 1,
        name: "Admin User",
        email: "admin@gmail.com",
        role: "Admin",
        status: "active",
      },
      {
        id: 2,
        name: "HR Manager",
        email: "hr@gmail.com",
        role: "HR",
        status: "inactive",
      },
    ];

    setUsers(demoUsers);
  };

  /* ================= FILTERED USERS ================= */
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRole =
      filterRole === "all" || user.role === filterRole;

    return matchesSearch && matchesRole;
  });

  /* ================= SAVE USER ================= */
  const handleSaveUser = () => {
    if (!userForm.name || !userForm.email) {
      alert("Name and Email required");
      return;
    }

    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser.id
            ? { ...editingUser, ...userForm }
            : u
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        ...userForm,
      };
      setUsers((prev) => [...prev, newUser]);
    }

    resetModal();
  };

  const resetModal = () => {
    setUserForm({
      name: "",
      email: "",
      role: "HR",
      status: "active",
    });
    setEditingUser(null);
    setShowModal(false);
  };

  /* ================= DELETE ================= */
  const handleDelete = (id) => {
    if (!window.confirm("Delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  /* ================= TOGGLE STATUS ================= */
  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              status:
                u.status === "active"
                  ? "inactive"
                  : "active",
            }
          : u
      )
    );
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUserForm(user);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-900">
      <h2 className="text-2xl font-bold mb-6">
        Users Management
      </h2>

      {/* ================= FILTERS ================= */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search user..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="HR">HR</option>
          <option value="Recruiter">Recruiter</option>
        </select>

        <button
          onClick={() => setShowModal(true)}
          className="ml-auto bg-green-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[450px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {editingUser ? "Edit User" : "Add User"}
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 w-full rounded mb-3"
              value={userForm.name}
              onChange={(e) =>
                setUserForm({ ...userForm, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full rounded mb-3"
              value={userForm.email}
              onChange={(e) =>
                setUserForm({ ...userForm, email: e.target.value })
              }
            />

            <select
              className="border p-2 w-full rounded mb-3"
              value={userForm.role}
              onChange={(e) =>
                setUserForm({ ...userForm, role: e.target.value })
              }
            >
              <option>Admin</option>
              <option>HR</option>
              <option>Recruiter</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={resetModal}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="bg-green-600 text-white px-4 py-2 rounded"
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