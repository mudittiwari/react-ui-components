import React, { useState, ChangeEvent, useDeferredValue, useMemo } from "react";

// Create large dataset
const ITEM_COUNT = 25000;
const items = Array.from({ length: ITEM_COUNT }, (_, i) => {
  const first = ["Alex", "Sam", "Jordan", "Chris", "Casey", "Morgan"][i % 6];
  const last = ["Smith", "Brown", "Lee", "Patel", "Singh", "Kim"][Math.floor(i / 6) % 6];
  return `${first} ${last} #${i + 1}`;
});

interface SearchProps {
  items: string[];
  title: string;
  useDeferred?: boolean;
  accentColor: string;
}

const SearchDemo: React.FC<SearchProps> = ({ items, title, useDeferred = false, accentColor }) => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const displayQuery = useDeferred ? deferredQuery : query;

  // Memoized heavy filtering
  const filtered = useMemo(() => {
    return items.filter(item => {
      if (!useDeferred) {
        let sum = 0;
        for (let i = 0; i < 10000; i++) sum += Math.sqrt(i);
      }
      return item.toLowerCase().includes(displayQuery.toLowerCase());
    });
  }, [items, displayQuery, useDeferred]);

  const limitedFiltered = filtered.slice(0, 800);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  return (
    <div style={{ ...cardStyle, borderTop: `6px solid ${accentColor}`, boxShadow: `0 12px 30px ${accentColor}40` }}>
      {/* Title */}
      <h2 style={{ ...headerStyle, color: accentColor }}>{title}</h2>

      {/* Search Box */}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="🔍 Search names..."
          value={query}
          onChange={handleChange}
          style={{ ...inputStyle, borderColor: accentColor, boxShadow: `0 0 8px ${accentColor}50` }}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* Info */}
      <div style={{ ...infoStyle, color: accentColor }}>
        Showing <b>{limitedFiltered.length}</b> / {items.length} results
      </div>

      {/* Scrollable list */}
      <div style={scrollContainerStyle}>
        <ul style={ulStyle}>
          {limitedFiltered.length === 0 ? (
            <li style={liNoResultsStyle}>No results found</li>
          ) : (
            limitedFiltered.map((item, idx) => (
              <li
                style={{
                  ...liStyle,
                  borderLeft: `4px solid transparent`,
                  transition: "border-color 0.3s ease, background-color 0.3s ease",
                  cursor: "default",
                }}
                key={idx}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = accentColor)}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "transparent")}
              >
                {displayQuery
                  ? item.split(new RegExp(`(${displayQuery})`, "gi")).map((part, i) =>
                      part.toLowerCase() === displayQuery.toLowerCase() ? (
                        <mark key={i} style={{ backgroundColor: accentColor, color: "#fff", padding: "2px 4px", borderRadius: 4, fontWeight: "bold" }}>
                          {part}
                        </mark>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )
                  : item}
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Hint */}
      <div style={{ ...hintStyle, color: accentColor }}>
        {useDeferred ? "✨ Smooth input with useDeferredValue" : "⚠️ Without useDeferredValue - may lag"}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <main style={containerStyle}>
      {/* <SearchDemo
        items={items}
        title="❗ Without useDeferredValue"
        useDeferred={false}
        accentColor="#e53935" // warm red
      /> */}
      <SearchDemo
        items={items}
        title="✨ With useDeferredValue"
        useDeferred={true}
        accentColor="#1976d2" // calming blue
      />
    </main>
  );
}

const containerStyle: React.CSSProperties = {
  display: "flex",
  gap: 48,
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f7faff 0%, #fff1f1 100%)",
  padding: 40,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 20,
  boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
  width: 440,
  display: "flex",
  flexDirection: "column",
  padding: 28,
  gap: 14,
  minHeight: 580,
  transition: "transform 0.3s ease",
};

const headerStyle: React.CSSProperties = {
  fontSize: "1.75rem",
  fontWeight: 700,
  marginBottom: 12,
  letterSpacing: 0.4,
  userSelect: "none",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 18px",
  fontSize: "1.1rem",
  borderRadius: 10,
  border: "2px solid transparent",
  background: "#f8faff",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.07)",
  fontWeight: "600",
  userSelect: "text",
  caretColor: "#000",
};

const infoStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  marginBottom: 6,
  userSelect: "none",
};

const scrollContainerStyle: React.CSSProperties = {
  maxHeight: 380,
  minHeight: 380,
  overflowY: "auto",
  border: "1.5px solid #eee",
  borderRadius: 10,
  background: "#fafbff",
  boxShadow: "inset 0 3px 7px rgba(0,0,0,0.04)",
  transition: "box-shadow 0.3s ease",
};

const ulStyle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  listStyle: "none",
};

const liStyle: React.CSSProperties = {
  padding: "10px 16px",
  fontSize: 16,
  color: "#2d2d2d",
  borderBottom: "1px solid #eaeaea",
  userSelect: "none",
  borderRadius: 8,
  transition: "background-color 0.3s ease",
};

const liNoResultsStyle: React.CSSProperties = {
  ...liStyle,
  fontStyle: "italic",
  color: "#888",
  textAlign: "center",
  userSelect: "none",
};

const hintStyle: React.CSSProperties = {
  fontSize: 13,
  fontStyle: "italic",
  paddingTop: 10,
  userSelect: "none",
};
