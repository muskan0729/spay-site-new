import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PlusCircle,
  Users,
  CalendarPlus,
  FileDown,
} from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Position",
      description: "Create a new job role",
      icon: <PlusCircle size={28} />,
      color: "bg-blue-100 text-blue-600",
      action: () => navigate("/admin/positions"),
    },
    {
      title: "View Candidates",
      description: "Manage all applicants",
      icon: <Users size={28} />,
      color: "bg-purple-100 text-purple-600",
      action: () => navigate("/admin/candidates"),
    },
    {
      title: "Schedule Interview",
      description: "Plan candidate interviews",
      icon: <CalendarPlus size={28} />,
      color: "bg-yellow-100 text-yellow-600",
      action: () => navigate("/admin/candidates"),
    },
    {
      title: "Export Reports",
      description: "Download hiring reports",
      icon: <FileDown size={28} />,
      color: "bg-green-100 text-green-600",
      action: () => alert("Exporting Reports (Demo)"),
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${item.color}`}
            >
              {item.icon}
            </div>

            <h4 className="font-semibold text-gray-800">
              {item.title}
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;