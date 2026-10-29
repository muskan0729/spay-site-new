import { useEffect, useState } from "react";
import { Search, Users, RefreshCw, Download } from "lucide-react"; // 👈 Added Download
import { format } from "date-fns";
import { apiClient } from "../../hooks/useApi";
import VisitorDetailModal from "../components/VisitorDetailModal";

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  
  // 👈 State for Modal
  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const fetchVisitors = async (pageNum = 1, searchQuery = "") => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/admin/analytics/visitors?page=${pageNum}&search=${searchQuery}`);
      setVisitors(res.data.data);
      setPage(res.data.current_page);
      setLastPage(res.data.last_page);
    } catch (err) {
      console.error("Failed to load visitors", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors(1, search);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVisitors(1, search);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    try { return format(new Date(dateStr), "dd MMM yyyy, hh:mm a"); } catch (e) { return dateStr; }
  };

  // 🛑 NEW: CSV Export Function
  const handleExportCSV = () => {
    if (!visitors.length) return;
    
    const headers = ["Visitor ID", "First Seen", "Last Seen", "Sessions", "Events"];
    const csvData = visitors.map(v => [
      v.visitor_id, 
      formatDate(v.first_seen_at), 
      formatDate(v.last_seen_at), 
      v.total_sessions, 
      v.total_events
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," + 
      [headers.join(","), ...csvData.map(e => e.join(","))].join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `visitors_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="text-blue-600" /> Visitor Directory
          </h1>
          <p className="text-sm text-gray-500 mt-1">All unique visitors tracked on your website</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <form onSubmit={handleSearch} className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Visitor UUID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </form>
          
          {/* 🛑 NEW: Export CSV Button */}
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition shadow-sm whitespace-nowrap"
          >
            <Download size={16} /> Export CSV
          </button>

          <button
            onClick={() => fetchVisitors(1, search)}
            className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Visitor ID</th>
                <th className="px-6 py-4 font-medium">First Seen</th>
                <th className="px-6 py-4 font-medium">Last Seen</th>
                <th className="px-6 py-4 font-medium text-center">Sessions</th>
                <th className="px-6 py-4 font-medium text-center">Events</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">Loading visitors...</td>
                </tr>
              ) : visitors.length > 0 ? (
                visitors.map((v) => (
                  <tr 
                    key={v.id} 
                    onClick={() => setSelectedVisitor(v.visitor_id)}
                    className="hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-blue-600" title={v.visitor_id}>
                      {v.visitor_id}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(v.first_seen_at)}</td>
                    <td className="px-6 py-4 text-gray-600">{formatDate(v.last_seen_at)}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">{v.total_sessions}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">{v.total_events}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">No visitors found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {lastPage > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
            <span className="text-sm text-gray-600">Page {page} of {lastPage}</span>
            <div className="flex gap-2">
              <button
                disabled={page === 1}
                onClick={() => fetchVisitors(page - 1, search)}
                className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50"
              >
                Previous
              </button>
              <button
                disabled={page === lastPage}
                onClick={() => fetchVisitors(page + 1, search)}
                className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 👈 Render Modal */}
      {selectedVisitor && (
        <VisitorDetailModal 
          visitorId={selectedVisitor} 
          onClose={() => setSelectedVisitor(null)} 
        />
      )}
    </div>
  );
};

export default Visitors;