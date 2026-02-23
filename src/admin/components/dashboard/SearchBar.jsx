import React, { useEffect, useState, useRef, useCallback } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGet } from "../../../hooks/useGet";

// Simple debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

const SearchBar = () => {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Use your custom hook for search
  const { 
    data: searchData, 
    loading, 
    error,
    refetch: performSearch 
  } = useGet('/search', { lazy: true });

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      if (term.trim().length >= 2) {
        performSearch({ params: { q: term } });
      }
    }, 500),
    [performSearch]
  );

  // Update when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setShowDropdown(false);
      return;
    }

    debouncedSearch(searchTerm);
    
    return () => {
      debouncedSearch.cancel?.();
    };
  }, [searchTerm, debouncedSearch]);

  // Handle search results
  const results = searchData?.data || [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchTerm(value);
    setShowDropdown(true);
  };

  // Handle navigation
  const handleNavigate = (item) => {
    setQuery("");
    setSearchTerm("");
    setShowDropdown(false);
    
    if (item.type === "candidate") {
      navigate(`/admin/candidates/${item.id}`);
    } else {
      navigate(`/admin/positions/${item.id}`);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-80 text-black">
      <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2 shadow-sm">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search candidates or positions..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => query && setShowDropdown(true)}
          className="ml-2 w-full outline-none text-sm text-black placeholder-gray-500 bg-transparent"
        />
        {loading && (
          <div className="ml-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Dropdown Results */}
      {showDropdown && searchTerm.length >= 2 && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-center text-gray-500">
              Searching...
            </div>
          ) : results.length > 0 ? (
            results.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => handleNavigate(item)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition border-b last:border-b-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {item.type === 'candidate' ? (
                        <>
                          Candidate {item.position && `• ${item.position}`}
                          {item.email && ` • ${item.email}`}
                        </>
                      ) : (
                        <>
                          Position {item.department && `• ${item.department}`}
                          {item.location && ` • ${item.location}`}
                        </>
                      )}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'active' || item.status === 'accepted' 
                      ? 'bg-green-100 text-green-700'
                      : item.status === 'scheduled'
                      ? 'bg-yellow-100 text-yellow-700'
                      : item.status === 'rejected' || item.status === 'inactive'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;