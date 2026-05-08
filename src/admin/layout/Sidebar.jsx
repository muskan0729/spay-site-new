import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserCheck,
  FileText,
  LogOut,
} from "lucide-react";

import logo from "../../assets/images/logo.webp";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Positions",
    path: "/admin/positions",
    icon: Briefcase,
  },
  {
    name: "Candidates",
    path: "/admin/candidates",
    icon: UserCheck,
  },
  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: FileText,
  },
];

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        <div>
          <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
          <p className="text-xs text-gray-500">Recruitment System</p>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
        <button
          onClick={() => navigate("/")}
          className="
          h-9
          px-4
          rounded-xl
          bg-[#f8fafc]
          hover:bg-[#eef2ff]
          border
          border-[#e2e8f0]
          text-[13px]
          font-medium
          text-[#2563eb]
          transition
          cursor-pointer
        "
        >
          Home ?
        </button>
      </div>

      {/* Logout Button */}
      <div className="px-4 pb-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200 font-medium"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
        © 2026 Spay Fintech Pvt Ltd.
      </div>
    </div>
  );
};

export default Sidebar;
