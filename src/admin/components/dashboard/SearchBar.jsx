import React, { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  /* ===============================
     CLOSE DROPDOWN ON OUTSIDE CLICK
  =============================== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ===============================
     FETCH SEARCH RESULTS
  =============================== */
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    fetchResults();
  }, [query]);

  const fetchResults = async () => {
    try {
      // 🔁 Replace with real API later
      // const res = await fetch(`/api/search?q=${query}`);
      // const data = await res.json();
      // setResults(data);

      const demoData = [
        {
          id: 1,
          type: "candidate",
          name: "Rahul Sharma",
          position: "Frontend Developer",
        },
        {
          id: 2,
          type: "position",
          name: "UI Designer",
        },
      ];

      const filtered = demoData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
      setShowDropdown(true);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleNavigate = (item) => {
    setQuery("");
    setShowDropdown(false);

    if (item.type === "candidate") {
      navigate("/admin/candidates");
    } else {
      navigate("/admin/positions");
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-80 text-black">
      {/* Search Input */}
      <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search candidates or positions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowDropdown(true)}
          className="ml-2 w-full outline-none text-sm text-black placeholder-gray-500 bg-transparent"
        />
      </div>

      {/* Dropdown */}
      {showDropdown && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigate(item)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition text-black"
            >
              <p className="font-medium text-black">
                {item.name}
              </p>
              <p className="text-xs text-gray-600 capitalize">
                {item.type}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;