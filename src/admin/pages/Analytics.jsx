import { useCallback, useEffect, useState } from "react";
import {
  ChartNoAxesCombined, Users, Activity, Eye, RefreshCw, AlertCircle,
  MousePointerClick, LogIn, LogOut, MousePointer2, MoveDown, Zap
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";
import { format } from "date-fns";
import { apiClient } from "../../hooks/useApi";
import DateRangePicker from "../components/DateRangePicker";
import SessionDetailModal from "../../components/SessionDetailModal";

const Analytics = () => {
  const [data, setData] = useState(null);
  const [trend, setTrend] = useState([]);
  const [pagesData, setPagesData] = useState({ entry: [], exit: [] });
  const [recentSessions, setRecentSessions] = useState([]);
  const [clicks, setClicks] = useState([]);
  const [scrolls, setScrolls] = useState([]);
  
  const [activeUsers, setActiveUsers] = useState(0);
  const [vitals, setVitals] = useState([]);
  
  const [range, setRange] = useState({ from: "", to: "" });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  
  const [selectedSession, setSelectedSession] = useState(null);

  const fetchData = useCallback(
    async (isRefresh = false) => {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams();
        if (range.from) params.set("from", range.from);
        if (range.to) params.set("to", range.to);
        const query = params.toString();

        const [
          overviewRes, trendRes, pagesRes, sessionsRes, clicksRes, scrollsRes, activeRes, vitalsRes
        ] = await Promise.all([
          apiClient.get(`/admin/analytics/overview?${query}`),
          apiClient.get(`/admin/analytics/trend?${query}`),
          apiClient.get(`/admin/analytics/entry-exit?${query}`),
          apiClient.get(`/admin/analytics/recent-sessions`),
          apiClient.get(`/admin/analytics/clicks?${query}`),
          apiClient.get(`/admin/analytics/scroll-depth?${query}`),
          apiClient.get(`/admin/analytics/active-users`),
          apiClient.get(`/admin/analytics/vitals`)
        ]);

        // 🛑 SAFE FALLBACKS: Ensure arrays are never undefined
        setData(overviewRes.data?.data ?? null);
        setTrend(Array.isArray(trendRes.data?.data) ? trendRes.data.data : []);
        
        setPagesData({
          entry: Array.isArray(pagesRes.data?.entry) ? pagesRes.data.entry : [],
          exit: Array.isArray(pagesRes.data?.exit) ? pagesRes.data.exit : []
        });
        
        setRecentSessions(Array.isArray(sessionsRes.data?.data) ? sessionsRes.data.data : []);
        setClicks(Array.isArray(clicksRes.data?.data) ? clicksRes.data.data : []);
        setScrolls(Array.isArray(scrollsRes.data?.data) ? scrollsRes.data.data : []);
        setActiveUsers(activeRes.data?.active_users ?? 0);
        setVitals(Array.isArray(vitalsRes.data?.data) ? vitalsRes.data.data : []);

      } catch (err) {
        setError(err.response?.data?.message || "Analytics data load nahi hua.");
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [range]
  );

  useEffect(() => {
    fetchData(); 
    const intervalId = setInterval(() => {
      fetchData(true); 
    }, 30000); 
    return () => clearInterval(intervalId);
  }, [fetchData]);

  const metrics = [
    { title: "Page Views", value: data?.page_views, icon: Eye, color: "text-blue-600", background: "bg-blue-50" },
    { title: "Sessions", value: data?.sessions, icon: Activity, color: "text-violet-600", background: "bg-violet-50" },
    { title: "Unique Visitors", value: data?.visitors, icon: Users, color: "text-emerald-600", background: "bg-emerald-50" },
    { title: "Bounce Rate", value: data?.bounce_rate !== undefined ? `${data.bounce_rate}%` : null, icon: MousePointerClick, color: "text-orange-600", background: "bg-orange-50" },
  ];

  const formatXAxis = (tickItem) => {
    try { return format(new Date(tickItem), "MMM dd"); } catch (e) { return tickItem; }
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header & Controls */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Website Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Visitor traffic and detailed activity</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1.5 border border-green-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <Zap size={14} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700">{activeUsers} Live</span>
          </div>

          <DateRangePicker value={range} onChange={setRange} />
          
          <button
            onClick={() => fetchData(true)}
            disabled={loading || refreshing}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60 transition-colors"
          >
            <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={20} className="mt-0.5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Top Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(({ title, value, icon: Icon, color, background }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-gray-500">{title}</p>
              <div className={`rounded-lg p-2 ${background} ${color}`}><Icon size={20} /></div>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900">
              {loading && !data ? "..." : typeof value === "string" ? value : Number.isFinite(Number(value)) ? Number(value).toLocaleString("en-IN") : "—"}
            </p>
          </div>
        ))}
      </div>

      {/* Traffic Trend Chart */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Traffic Trend</h2>
        {loading && trend.length === 0 ? (
          <p className="py-8 text-sm text-gray-500">Loading chart...</p>
        ) : trend.length > 0 ? (
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="date" tickFormatter={formatXAxis} tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip labelFormatter={(label) => format(new Date(label), "MMMM dd, yyyy")} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} labelStyle={{ fontWeight: 'bold', color: '#111827', marginBottom: '4px' }} />
                <Area type="monotone" dataKey="views" name="Page Views" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="py-8 text-sm text-gray-500">No traffic data for this period.</p>
        )}
      </div>

      {/* Behaviour Analytics (Clicks & Scroll) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <MousePointer2 size={20} className="text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">Top Clicked Elements</h2>
          </div>
          <div className="space-y-4">
            {clicks.length > 0 ? clicks.map((c, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-3 last:border-0">
                <div className="flex flex-col min-w-0 pr-4">
                  <span className="text-gray-800 font-medium truncate">{c.label || 'Unlabeled Element'}</span>
                  <span className="text-xs text-gray-500 font-mono mt-1">&lt;{c.element_tag?.toLowerCase()}&gt;</span>
                </div>
                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">{c.total} clicks</span>
              </div>
            )) : <p className="text-sm text-gray-500 text-center py-4">No click data available.</p>}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <MoveDown size={20} className="text-teal-600" />
            <h2 className="text-lg font-semibold text-gray-900">Scroll Depth</h2>
          </div>
          <div className="space-y-4">
            {scrolls.length > 0 ? scrolls.map((s, i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-3 last:border-0">
                <span className="text-gray-700 font-medium">Scrolled {s.depth}% of page</span>
                <span className="font-bold text-gray-900 bg-teal-50 text-teal-700 px-3 py-1 rounded-lg">{s.total} times</span>
              </div>
            )) : <p className="text-sm text-gray-500 text-center py-4">No scroll data available.</p>}
          </div>
        </div>
      </div>

      {/* Web Vitals */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6 border-b pb-4">
          <ChartNoAxesCombined size={20} className="text-orange-600" />
          <h2 className="text-lg font-semibold text-gray-900">Page Performance (Core Web Vitals)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-medium">Page Path</th>
                <th className="px-4 py-3 font-medium text-right">LCP (Load Speed)</th>
                <th className="px-4 py-3 font-medium text-right">CLS (Visual Stability)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vitals.length > 0 ? vitals.map((v, i) => {
                const isLcpSlow = v.avg_lcp > 2500;
                return (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800 truncate max-w-[200px]">{v.page_path}</td>
                    <td className={`px-4 py-3 text-right font-semibold ${isLcpSlow ? 'text-red-600' : 'text-green-600'}`}>
                      {v.avg_lcp ? (v.avg_lcp / 1000).toFixed(2) + 's' : '-'}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-700">
                      {v.avg_cls ? Number(v.avg_cls).toFixed(3) : '-'}
                    </td>
                  </tr>
                );
              }) : (
                <tr><td colSpan="3" className="text-center py-6 text-gray-500">No performance data yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom 3 Components */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <LogIn size={20} className="text-green-600" />
            <h2 className="text-lg font-semibold text-gray-900">Top Landing Pages</h2>
          </div>
          <div className="space-y-4 flex-1">
            {pagesData.entry.length > 0 ? pagesData.entry.map((p, i) => (
              <div key={i} className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-3 last:border-0">
                <span className="text-gray-700 font-medium truncate max-w-[220px]" title={p.entry_path}>{p.entry_path}</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg text-sm">{p.total}</span>
              </div>
            )) : <p className="text-sm text-gray-500 text-center py-4">No data available</p>}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <LogOut size={20} className="text-red-500" />
            <h2 className="text-lg font-semibold text-gray-900">Top Exit Pages</h2>
          </div>
          <div className="space-y-4 flex-1">
            {pagesData.exit.length > 0 ? pagesData.exit.map((p, i) => (
              <div key={i} className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-3 last:border-0">
                <span className="text-gray-700 font-medium truncate max-w-[220px]" title={p.exit_path}>{p.exit_path}</span>
                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg text-sm">{p.total}</span>
              </div>
            )) : <p className="text-sm text-gray-500 text-center py-4">No data available</p>}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-6 border-b pb-4">
            <Activity size={20} className="text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="space-y-3 flex-1">
            {recentSessions.length > 0 ? recentSessions.map((s, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedSession(s.session_id)}
                className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-lg transition-colors"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-gray-800 font-medium truncate max-w-[180px]">{s.entry_path}</span>
                  <span className="text-xs text-gray-500 mt-1">ID: {s.session_id.slice(0, 8)}...</span>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded whitespace-nowrap">
                  {new Date(s.last_seen_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )) : <p className="text-sm text-gray-500 text-center py-4">No recent activity.</p>}
          </div>
        </div>
      </div>

      {/* Modal Rendering */}
      {selectedSession && (
        <SessionDetailModal 
          sessionId={selectedSession} 
          onClose={() => setSelectedSession(null)} 
        />
      )}
    </div>
  );
};

export default Analytics;