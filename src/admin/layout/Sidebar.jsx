import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  UserCheck,
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
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Admin Panel
          </h2>
          <p className="text-xs text-gray-500">
            Recruitment System
          </p>
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
              end={item.path === "/admin"}   // ✅ FIX HERE
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
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
        © 2026 Spay Fintech Pvt Ltd.
      </div>
    </div>
  );
};

export default Sidebar;