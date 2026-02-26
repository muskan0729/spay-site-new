import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PlusCircle,
  Users,
  CalendarPlus,
} from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Position",
      description: "Create and publish a new job role",
      icon: PlusCircle,
      color: "bg-blue-50 text-blue-600",
      hover: "hover:bg-blue-600 hover:text-white",
      action: () => navigate("/admin/positions"),
    },
    {
      title: "View Candidates",
      description: "Manage and review all applicants",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      hover: "hover:bg-purple-600 hover:text-white",
      action: () => navigate("/admin/candidates"),
    },
    {
      title: "Schedule Interview",
      description: "Plan and organize interviews",
      icon: CalendarPlus,
      color: "bg-yellow-50 text-yellow-600",
      hover: "hover:bg-yellow-500 hover:text-white",
      action: () => navigate("/admin/candidates"),
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={item.action}
              className="group text-left p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-50"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 ${item.color} ${item.hover}`}
              >
                <Icon size={26} />
              </div>

              <h4 className="font-semibold text-gray-800 group-hover:text-gray-900 transition">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;