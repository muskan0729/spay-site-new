import { useEffect, useState } from "react";
import { X, Activity, Clock, Link as LinkIcon } from "lucide-react";
import { format } from "date-fns";
import { apiClient } from "../../hooks/useApi";
import SessionDetailModal from "../../components/SessionDetailModal";

const VisitorDetailModal = ({ visitorId, onClose }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    if (!visitorId) return;

    const fetchVisitor = async () => {
      try {
        const res = await apiClient.get(`/admin/analytics/visitors/${visitorId}`);
        // 🛑 Safely check if data exists
        setData(res.data?.data ?? null);
      } catch (err) {
        setError("Visitor details load nahi ho sake.");
      } finally {
        setLoading(false);
      }
    };
    fetchVisitor();
  }, [visitorId]);

  if (!visitorId) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    try { return format(new Date(dateStr), "dd MMM yyyy, hh:mm a"); } catch (e) { return dateStr; }
  };

  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4 bg-gray-50">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Visitor History</h2>
              <p className="text-xs text-gray-500 font-mono mt-1">ID: {visitorId}</p>
            </div>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {loading ? (
              <p className="text-center text-gray-500 py-10">Loading history...</p>
            ) : error ? (
              <p className="text-center text-red-500 py-10">{error}</p>
            ) : data && data.visitor ? ( // 🛑 SAFE CHECK YAHAN HAI
              <div className="space-y-4">
                <div className="flex justify-between bg-white p-4 rounded-lg border">
                   <div>
                     <p className="text-xs text-gray-500">First Seen</p>
                     <p className="font-medium text-gray-800">{formatDate(data.visitor.first_seen_at)}</p>
                   </div>
                   <div>
                     <p className="text-xs text-gray-500">Total Events</p>
                     <p className="font-medium text-gray-800">{data.total_events}</p>
                   </div>
                </div>

                <h3 className="font-semibold text-gray-800 mt-6 border-b pb-2">Sessions ({data.total_sessions})</h3>
                
                <div className="space-y-3">
                  {data.sessions && data.sessions.length > 0 ? data.sessions.map((s, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedSession(s.session_id)}
                      className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-400 cursor-pointer transition-colors shadow-sm"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-gray-800 flex items-center gap-2">
                          <LinkIcon size={14} className="text-blue-500" /> {s.entry_path}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">ID: {s.session_id.slice(0, 8)}...</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        <Clock size={12} /> {formatDate(s.started_at)}
                      </div>
                    </div>
                  )) : <p className="text-sm text-gray-500">No sessions found.</p>}
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500 py-10">No data available for this visitor.</p>
            )}
          </div>
        </div>
      </div>

      {/* Session Detail Modal (Nested) */}
      {selectedSession && (
        <SessionDetailModal 
          sessionId={selectedSession} 
          onClose={() => setSelectedSession(null)} 
        />
      )}
    </>
  );
};

export default VisitorDetailModal;