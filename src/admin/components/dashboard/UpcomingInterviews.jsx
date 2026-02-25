import React, { useEffect, useState } from "react";
import { CalendarDays, Video } from "lucide-react";
import { apiClient } from "../../../hooks/useApi"; // adjust path if needed

const UpcomingInterviews = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ===============================
     FETCH UPCOMING INTERVIEWS
  =============================== */
  useEffect(() => {
    fetchUpcoming();
  }, []);

  const fetchUpcoming = async () => {
    try {
      setLoading(true);

      const response = await apiClient.get("/interviews");

      const today = new Date().toISOString().split("T")[0];

      // Filter only today + future interviews
      const upcoming = response.data
        .filter((item) => item.date >= today)
        .sort((a, b) => {
          if (a.date === b.date) {
            return a.start_time.localeCompare(b.start_time);
          }
          return a.date.localeCompare(b.date);
        });

      setInterviews(upcoming);
      setLoading(false);
    } catch (error) {
      console.error("Upcoming fetch error:", error);
      setLoading(false);
    }
  };

  const isToday = (date) => {
    const today = new Date().toISOString().split("T")[0];
    return today === date;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <CalendarDays size={20} />
        Upcoming Interviews
      </h3>

      {loading ? (
        <div className="text-center py-6 text-gray-500">
          Loading interviews...
        </div>
      ) : interviews.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          No upcoming interviews
        </div>
      ) : (
        <div className="space-y-4">
          {interviews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition"
            >
              {/* Left Info */}
              <div>
                <p className="font-semibold text-gray-800">
                  {item.candidate?.name || "Candidate"}
                </p>
                <p className="text-sm text-gray-500">
                  {item.position?.name || "Position"}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {item.date} • {item.start_time} - {item.end_time}
                </p>
              </div>

              {/* Status + Join */}
              <div className="flex items-center gap-4 mt-3 md:mt-0">
                {isToday(item.date) ? (
                  <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    Today
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
                    Upcoming
                  </span>
                )}

                {item.join_link && (
                  <a
                    href={item.join_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 transition"
                  >
                    <Video size={16} />
                    Join
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingInterviews;