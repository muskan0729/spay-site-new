import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import {
  X,
  Loader2,
  Calendar as CalendarIcon,
  User,
  Clock,
} from "lucide-react";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import { apiClient } from "../../../hooks/useApi";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const InterviewCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(Views.MONTH);

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/interviews");

      const formattedEvents = response.data
        .map((item) => {
          if (!item.date || !item.start_time) return null;

          const [year, month, day] = item.date.split("-");
          const [startHour, startMinute] = item.start_time.split(":");
          const endTime = item.end_time || item.start_time;
          const [endHour, endMinute] = endTime.split(":");

          return {
            id: item.id,
            title: `${item.candidate?.name || "Candidate"} - ${
              item.candidate?.position?.name || "Position"
            }`,
            start: new Date(
              +year,
              +month - 1,
              +day,
              +startHour,
              +startMinute
            ),
            end: new Date(
              +year,
              +month - 1,
              +day,
              +endHour,
              +endMinute
            ),
            candidate: item.candidate?.name || "N/A",
            position: item.candidate?.position?.name || "N/A",
            joinLink: item.join_link || null,
          };
        })
        .filter(Boolean);

      setEvents(formattedEvents);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= EVENT STYLE ================= */
  const eventStyleGetter = () => ({
    style: {
      backgroundColor: "#2563eb",
      borderRadius: "6px",
      color: "#fff",
      border: "none",
      fontSize: "12px",
      padding: "3px 6px",
    },
  });

  /* ================= TOOLBAR ================= */
  const CustomToolbar = (toolbar) => (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 p-4 bg-gray-50 rounded-xl">
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          {format(toolbar.date, "MMMM yyyy", { locale: enUS })}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => toolbar.onNavigate("PREV")}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm"
        >
          Prev
        </button>
        <button
          onClick={() => toolbar.onNavigate("TODAY")}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm"
        >
          Today
        </button>
        <button
          onClick={() => toolbar.onNavigate("NEXT")}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm"
        >
          Next
        </button>

        <select
          value={currentView}
          onChange={(e) => setCurrentView(e.target.value)}
          className="px-3 py-1.5 border rounded-md text-sm"
        >
          <option value={Views.MONTH}>Month</option>
          <option value={Views.WEEK}>Week</option>
          <option value={Views.DAY}>Day</option>
        </select>

        <button
          onClick={fetchInterviews}
          disabled={loading}
          className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm flex items-center gap-1"
        >
          <Loader2
            className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
          />
          Refresh
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
        <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          Interview Calendar
        </h3>
        <span className="text-sm text-gray-500">
          {events.length} scheduled
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="min-w-[650px] sm:min-w-full">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              view={currentView}
              onView={setCurrentView}
              onSelectEvent={setSelectedEvent}
              eventPropGetter={eventStyleGetter}
              components={{ toolbar: CustomToolbar }}
              style={{ height: window.innerWidth < 640 ? 500 : 650 }}
            />
          </div>
        </div>
      )}

      {/* ================= MODAL ================= */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-lg font-semibold mb-4 text-center">
              Interview Details
            </h3>

            <div className="space-y-3 text-sm">
              <p><strong>Candidate:</strong> {selectedEvent.candidate}</p>
              <p><strong>Position:</strong> {selectedEvent.position}</p>
              <p>
                <strong>Date:</strong>{" "}
                {format(selectedEvent.start, "PPP")}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {format(selectedEvent.start, "p")} -{" "}
                {format(selectedEvent.end, "p")}
              </p>
            </div>

            {selectedEvent.joinLink && (
              <a
                href={selectedEvent.joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-5 bg-blue-600 text-white text-center py-2 rounded-lg"
              >
                Join Meeting
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewCalendar;