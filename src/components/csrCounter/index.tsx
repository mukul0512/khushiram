// CSR Counter Component - Fully client-side
"use client";

import { useState } from "react";

const CSRCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0fdff", borderRadius: "8px" }}>
      <h4 style={{ marginBottom: "15px", color: "#00d9ff" }}>CSR Counter Component</h4>
      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "black" }}>Count:</strong> <span style={{ color: "black" }}>{count}</span>
      </div>
      <p style={{ fontSize: "12px", color: "#666", marginBottom: "15px" }}>
        Fully client-side rendered (no server-side HTML)
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#00d9ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff0080",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#666",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
      <p style={{ fontSize: "11px", color: "#999", marginTop: "15px", fontStyle: "italic" }}>
        Note: This component and all its interactivity is rendered entirely on the client. 
        No server-side HTML is generated for this content.
      </p>
    </div>
  );
};

export default CSRCounter;
