import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { X, Loader2, Calendar as CalendarIcon, User, Clock } from "lucide-react";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import { apiClient } from "../../../hooks/useApi";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

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

  /* ===============================
     FETCH INTERVIEW EVENTS
  =============================== */
  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      setLoading(true);

      const response = await apiClient.get("/interviews");

      const formattedEvents = response.data.map((item) => {
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
            Number(year),
            Number(month) - 1,
            Number(day),
            Number(startHour),
            Number(startMinute)
          ),
          end: new Date(
            Number(year),
            Number(month) - 1,
            Number(day),
            Number(endHour),
            Number(endMinute)
          ),
          candidate: item.candidate?.name || "N/A",
          position: item.candidate?.position?.name || "N/A",
          joinLink: item.join_link || null,
        };
      }).filter(Boolean);

      setEvents(formattedEvents);
    } catch (error) {
      console.error("Calendar fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     EVENT STYLE
  =============================== */
  const eventStyleGetter = () => ({
    style: {
      backgroundColor: "#2563eb",
      borderRadius: "8px",
      opacity: 0.9,
      color: "#ffffff",
      border: "none",
      fontSize: "13px",
      padding: "4px",
      fontWeight: "500",
      boxShadow: "0 2px 4px rgba(37, 99, 235, 0.2)",
    },
  });

  /* ===============================
     CUSTOM COMPONENTS
  =============================== */
  const CustomToolbar = (toolbar) => (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          {format(toolbar.date, "MMMM yyyy", { locale: enUS })}
        </h3>
      </div>
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <button
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
          onClick={() => toolbar.onNavigate("PREV")}
        >
          Previous
        </button>
        <button
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
          onClick={() => toolbar.onNavigate("TODAY")}
        >
          Today
        </button>
        <button
          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
          onClick={() => toolbar.onNavigate("NEXT")}
        >
          Next
        </button>
        <select
          className="px-3 py-1.5 bg-white border border-gray-300 text-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={currentView}
          onChange={(e) => setCurrentView(e.target.value)}
        >
          <option value={Views.MONTH}>Month</option>
          <option value={Views.WEEK}>Week</option>
          <option value={Views.DAY}>Day</option>
        </select>
        <button
          onClick={fetchInterviews}
          className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center gap-1"
          disabled={loading}
        >
          <Loader2 className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-blue-600" />
          Interview Calendar
        </h3>
        <div className="text-sm text-gray-500">
          {events.length} interview{events.length !== 1 ? 's' : ''} scheduled
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
          <p className="text-lg">Loading calendar...</p>
        </div>
      ) : events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <CalendarIcon className="h-16 w-16 mb-4 opacity-50" />
          <p className="text-xl font-medium">No interviews scheduled</p>
          <p className="text-sm mt-2">Get started by scheduling your first interview.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            view={currentView}
            onView={setCurrentView}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={eventStyleGetter}
            popup={false}
            components={{
              toolbar: CustomToolbar,
            }}
            className="bg-white"
          />
        </div>
      )}

      {/* ===============================
         EVENT DETAILS MODAL
      =============================== */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Interview Details
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <User className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Candidate</p>
                  <p className="text-sm text-gray-600">{selectedEvent.candidate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Position</p>
                  <p className="text-sm text-gray-600">{selectedEvent.position}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <CalendarIcon className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Date</p>
                  <p className="text-sm text-gray-600">
                    {format(selectedEvent.start, "EEEE, MMMM do, yyyy")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Time</p>
                  <p className="text-sm text-gray-600">
                    {format(selectedEvent.start, "h:mm a")} -{" "}
                    {format(selectedEvent.end, "h:mm a")}
                  </p>
                </div>
              </div>
            </div>

            {selectedEvent.joinLink && (
              <div className="mb-6">
                <a
                  href={selectedEvent.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Join Meeting
                </a>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewCalendar;