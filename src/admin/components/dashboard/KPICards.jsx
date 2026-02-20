import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Briefcase,
  Users,
  CalendarCheck,
  CheckCircle,
  XCircle,
  Activity,
} from "lucide-react";

const KPICards = () => {
  const [stats, setStats] = useState({
    totalPositions: 0,
    activePositions: 0,
    totalCandidates: 0,
    interviewsScheduled: 0,
    acceptedCandidates: 0,
    rejectedCandidates: 0,
  });

  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH DASHBOARD STATS
  ========================= */
  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);

      // 🔁 Replace with real API later
      // const res = await fetch("/api/dashboard/stats");
      // const data = await res.json();
      // setStats(data);

      /* ======================
         STATIC DEMO DATA
      ====================== */
      setTimeout(() => {
        setStats({
          totalPositions: 24,
          activePositions: 18,
          totalCandidates: 142,
          interviewsScheduled: 12,
          acceptedCandidates: 8,
          rejectedCandidates: 20,
        });
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error("KPI fetch error:", error);
      setLoading(false);
    }
  };

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
      title: "Total Candidates",
      value: stats.totalCandidates,
      icon: <Users size={22} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Interviews Scheduled",
      value: stats.interviewsScheduled,
      icon: <CalendarCheck size={22} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Accepted Candidates",
      value: stats.acceptedCandidates,
      icon: <CheckCircle size={22} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Rejected Candidates",
      value: stats.rejectedCandidates,
      icon: <XCircle size={22} />,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-all"
        >
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