import { useState } from "react";

// 🛑 Added 1 Month, 3 Months, 6 Months
const PRESETS = [
  { label: "Today", days: 0 },
  { label: "Last 7d", days: 7 },
  { label: "1 Month", days: 30 },
  { label: "3 Months", days: 90 },
  { label: "6 Months", days: 180 },
];

function toDateStr(d) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const DateRangePicker = ({ value, onChange }) => {
  const [custom, setCustom] = useState(false);

  const getPresetDates = (days) => {
    const to = new Date();
    const from = new Date();
    from.setDate(to.getDate() - days);
    return { from: toDateStr(from), to: toDateStr(to) };
  };

  const applyPreset = (days) => {
    onChange(getPresetDates(days));
    setCustom(false);
  };

  const isActive = (days) => {
    if (custom) return false;
    const preset = getPresetDates(days);
    return value.from === preset.from && value.to === preset.to;
  };

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      {PRESETS.map((p) => (
        <button
          key={p.days}
          type="button"
          onClick={() => applyPreset(p.days)}
          className={`px-3 py-1.5 text-sm border rounded-md transition-colors ${
            isActive(p.days)
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          {p.label}
        </button>
      ))}
      
      <button
        type="button"
        onClick={() => setCustom((v) => !v)}
        className={`px-3 py-1.5 text-sm border rounded-md transition-colors ${
          custom
            ? "bg-gray-900 text-white border-gray-900"
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        Custom
      </button>

      {custom && (
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={value.from || ""}
            max={value.to || undefined}
            onChange={(e) => onChange({ ...value, from: e.target.value })}
            className="px-2 py-1.5 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-400">→</span>
          <input
            type="date"
            value={value.to || ""}
            min={value.from || undefined}
            onChange={(e) => onChange({ ...value, to: e.target.value })}
            className="px-2 py-1.5 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;