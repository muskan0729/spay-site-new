import React, { useEffect, useState } from "react";
import {
  Calendar,
  dateFnsLocalizer,
} from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

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

  /* ===============================
     FETCH INTERVIEW EVENTS
  =============================== */
  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      setLoading(true);

      /* ===== Static Demo Data ===== */
      const demoEvents = [
        {
          id: 1,
          title: "Rahul - Frontend Developer",
          start: new Date(2026, 1, 22, 10, 0),
          end: new Date(2026, 1, 22, 11, 0),
          candidate: "Rahul Sharma",
          position: "Frontend Developer",
          joinLink: "https://meet.google.com/demo-link",
        },
        {
          id: 2,
          title: "Priya - UI Designer",
          start: new Date(2026, 1, 24, 14, 0),
          end: new Date(2026, 1, 24, 15, 0),
          candidate: "Priya Verma",
          position: "UI Designer",
          joinLink: "https://meet.google.com/demo-link",
        },
      ];

      setEvents(demoEvents);
      setLoading(false);
    } catch (error) {
      console.error("Calendar fetch error:", error);
      setLoading(false);
    }
  };

  /* ===============================
     CUSTOM EVENT STYLE
  =============================== */
  const eventStyleGetter = () => {
    return {
      style: {
        backgroundColor: "#2563eb",
        borderRadius: "8px",
        opacity: 0.9,
        color: "#ffffff",
        border: "none",
        display: "block",
        fontSize: "13px",
        padding: "4px",
      },
    };
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-gray-900">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Interview Calendar
      </h3>

      {loading ? (
        <div className="text-center py-10 text-gray-500">
          Loading calendar...
        </div>
      ) : (
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={(event) => setSelectedEvent(event)}
            eventPropGetter={eventStyleGetter}
            popup
          />
        </div>
      )}

      {/* ===============================
         EVENT DETAILS MODAL
      =============================== */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[450px] shadow-xl text-gray-900">
            <h3 className="text-xl font-bold mb-4">
              Interview Details
            </h3>

            <p className="mb-2">
              <strong>Candidate:</strong>{" "}
              {selectedEvent.candidate}
            </p>
            <p className="mb-2">
              <strong>Position:</strong>{" "}
              {selectedEvent.position}
            </p>
            <p className="mb-2">
              <strong>Date:</strong>{" "}
              {selectedEvent.start.toDateString()}
            </p>
            <p className="mb-2">
              <strong>Time:</strong>{" "}
              {selectedEvent.start.toLocaleTimeString()} -{" "}
              {selectedEvent.end.toLocaleTimeString()}
            </p>

            <div className="mt-4">
              <a
                href={selectedEvent.joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Join Meeting
              </a>
            </div>

            <div className="text-right mt-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
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