import { useEffect, useState } from "react";
import { X, Eye, MousePointer2, MoveDown, Clock, Link as LinkIcon, Play } from "lucide-react";
import { format } from "date-fns";
import { apiClient } from "../hooks/useApi";
import ReplayPlayerModal from "../admin/components/ReplayPlayerModal";

const SessionDetailModal = ({ sessionId, onClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showReplay, setShowReplay] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    const fetchSession = async () => {
      try {
        const res = await apiClient.get(`/admin/analytics/sessions/${sessionId}`);
        setData(res.data?.data ?? null);
      } catch (err) {
        setError("Session details load nahi ho sake.");
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [sessionId]);

  if (!sessionId) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Visitor Journey</h2>
              <p className="text-xs text-gray-500 font-mono mt-1">Session: {sessionId}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowReplay(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm"
              >
                <Play size={16} /> Play Replay
              </button>
              
              <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 text-gray-500 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {loading ? (
              <p className="text-center text-gray-500 py-10">Loading timeline...</p>
            ) : error ? (
              <p className="text-center text-red-500 py-10">{error}</p>
            ) : data?.timeline?.length > 0 ? (
              <div className="relative border-l-2 border-gray-200 ml-4 space-y-8 pb-4">
                {data.timeline.map((event, index) => {
                  let formattedDateTime = event.occurred_at;
                  try {
                    formattedDateTime = format(new Date(event.occurred_at), "dd MMM yyyy, hh:mm:ss a");
                  } catch (e) {}

                  // 🛑 FIX: Safely parse properties
                  let props = event.properties || {};
                  if (typeof props === 'string') {
                    try { props = JSON.parse(props); } catch (e) { props = {}; }
                  }

                  let Icon = Eye;
                  let iconColor = "bg-blue-100 text-blue-600";
                  let title = `Viewed ${event.page_path}`;
                  let desc = null;

                  if (event.event_name === "click") {
                    Icon = MousePointer2;
                    iconColor = "bg-purple-100 text-purple-600";
                    title = `Clicked Element`;
                    desc = props.analytics_label ? `"${props.analytics_label}"` : `<${props.element_tag || 'button'}>`;
                  } else if (event.event_name === "scroll_depth") {
                    Icon = MoveDown;
                    iconColor = "bg-teal-100 text-teal-600";
                    title = `Scrolled Page`;
                    desc = `Reached ${props.scroll_percent || 0}% on ${event.page_path}`;
                  }

                  return (
                    <div key={index} className="relative pl-8">
                      <div className={`absolute -left-[17px] top-1 rounded-full p-1.5 ring-4 ring-gray-50 ${iconColor}`}>
                        <Icon size={14} />
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{title}</p>
                            {desc && <p className="text-sm text-gray-600 mt-1">{desc}</p>}
                            {event.event_name === "page_view" && (
                               <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                 <LinkIcon size={12}/> {event.page_path}
                               </p>
                            )}
                          </div>
                          <span className="flex items-center gap-1 text-xs font-medium text-gray-500 whitespace-nowrap bg-gray-50 px-2 py-1 rounded w-full sm:w-auto mt-2 sm:mt-0">
                            <Clock size={12} /> {formattedDateTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-10">No events found for this session.</p>
            )}
          </div>
        </div>
      </div>

      {showReplay && (
        <ReplayPlayerModal 
          sessionId={sessionId} 
          onClose={() => setShowReplay(false)} 
        />
      )}
    </>
  );
};

export default SessionDetailModal;