import { useEffect, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css"; // 🛑 Required CSS
import { apiClient } from "../../hooks/useApi";

const ReplayPlayerModal = ({ sessionId, onClose }) => {
  const playerContainerRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sessionId) return;

    const fetchReplay = async () => {
      try {
        const res = await apiClient.get(`/admin/analytics/replay/${sessionId}`);
        const events = res.data?.events;

        if (!events || events.length === 0) {
          setError("Is session ka replay data nahi mila.");
          setLoading(false);
          return;
        }

        setLoading(false);
        
        // Wait for DOM to render
        setTimeout(() => {
          if (playerContainerRef.current) {
            // Clear previous player if any
            playerContainerRef.current.innerHTML = "";
            
            playerInstanceRef.current = new rrwebPlayer({
              target: playerContainerRef.current,
              props: {
                events,
                width: 1024, // Responsive width
                height: 576, // 16:9 ratio
                autoPlay: true,
                showController: true,
                skipInactive: true, // Fast forward when user is idle
              },
            });
          }
        }, 100);

      } catch (err) {
        setError(err.response?.data?.message || "Replay load nahi ho paya.");
        setLoading(false);
      }
    };

    fetchReplay();

    // Cleanup
    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.$destroy?.();
      }
    };
  }, [sessionId]);

  if (!sessionId) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Play size={18} className="text-blue-600"/> Session Replay
            </h2>
            <p className="text-xs text-gray-500 font-mono mt-1">Session: {sessionId}</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100 flex flex-col items-center justify-center min-h-[600px]">
          {loading && (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 font-medium">Fetching Replay Data...</p>
            </div>
          )}
          
          {error && <p className="text-red-500 font-medium bg-red-50 p-4 rounded-lg">{error}</p>}
          
          {/* Player Container */}
          <div 
            ref={playerContainerRef} 
            className={`w-full flex justify-center ${loading || error ? 'hidden' : 'block'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ReplayPlayerModal;