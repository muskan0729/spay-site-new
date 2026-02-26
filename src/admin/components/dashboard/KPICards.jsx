import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Briefcase,
  Users,
  CalendarCheck,
  CheckCircle,
  XCircle,
  Activity,
  Building2,
} from "lucide-react";
import { useGet } from "../../../hooks/useGet";

const KPICards = () => {
  const [stats, setStats] = useState({
    totalPositions: 0,
    activePositions: 0,
    inactivePositions: 0,
    totalDepartments: 0,
    totalCandidates: 0,
    interviewsScheduled: 0,
    acceptedCandidates: 0,
    rejectedCandidates: 0,
  });

  /* =========================
     FETCH DASHBOARD STATS FROM API
  ========================= */
  const { 
    data: dashboardData, 
    loading, 
    error,
    refetch 
  } = useGet('/dashboard-stats', { lazy: false });

  // Update stats when data is received from API
  useEffect(() => {
    if (dashboardData?.data) {
      setStats(prev => ({
        ...prev,
        totalPositions: dashboardData.data.total_positions || 0,
        activePositions: dashboardData.data.active_positions || 0,
        inactivePositions: dashboardData.data.inactive_positions || 0,
        totalDepartments: dashboardData.data.total_departments || 0,
        totalCandidates: dashboardData.data.total_candidates||0,
        interviewsScheduled: dashboardData.data.interviews_scheduled||0,
        acceptedCandidates: dashboardData.data.accepted_candidates||0,
        rejectedCandidates: dashboardData.data.rejected_candidates||0,
      }));
    }
  }, [dashboardData]);

  // Optional: Show error message
  useEffect(() => {
    if (error) {
      console.error("Dashboard stats error:", error);
    }
  }, [error]);

  const cardData = [
    {
      title: "Total Positions",
      value: stats.totalPositions,
      icon: <Briefcase size={22} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Positions",
      value: stats.activePositions,
      icon: <Activity size={22} />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Inactive Positions",
      value: stats.inactivePositions,
      icon: <XCircle size={22} />,
      color: "bg-gray-100 text-gray-600",
    },
    {
      title: "Total Departments",
      value: stats.totalDepartments,
      icon: <Building2 size={22} />,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Total Candidates",
      value: stats.totalCandidates,
      icon: <Users size={22} />,
      color: "bg-purple-100 text-purple-600",
      // note: "Coming soon", // Optional note
    },
    {
      title: "Interviews Scheduled",
      value: stats.interviewsScheduled,
      icon: <CalendarCheck size={22} />,
      color: "bg-yellow-100 text-yellow-600",
      // note: "Coming soon",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all relative"
        >
          {card.note && (
            <span className="absolute top-2 right-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {card.note}
            </span>
          )}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                {card.title}
              </p>

              {loading ? (
                <div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
              ) : (
                <h2 className="text-2xl font-bold text-gray-800">
                  <CountUp
                    end={card.value}
                    duration={1.5}
                  />
                </h2>
              )}
            </div>

            <div
              className={`p-3 rounded-xl ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;