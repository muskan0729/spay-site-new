import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">

        {/* Mobile Topbar */}
        <div className="lg:hidden flex items-center justify-between bg-white shadow px-4 py-4">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 className="font-semibold text-gray-700">Admin Panel</h1>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;