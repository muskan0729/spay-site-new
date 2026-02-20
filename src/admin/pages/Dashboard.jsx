import React from "react";
import KPICards from "../components/dashboard/KPICards";
import QuickActions from "../components/dashboard/QuickActions";
import SearchBar from "../components/dashboard/SearchBar";
import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";
import InterviewCalendar from "../components/dashboard/InterviewCalendar";


const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <SearchBar />
      </div>

      {/* ================= KPI CARDS ================= */}
      <KPICards />

      {/* ================= QUICK ACTIONS ================= */}
      <QuickActions />

      {/* ================= CHART + UPCOMING ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        


        {/* Upcoming Interviews */}
        <UpcomingInterviews />
      </div>

      {/* ================= INTERVIEW CALENDAR ================= */}
      <InterviewCalendar />

    </div>
  );
};

export default Dashboard;