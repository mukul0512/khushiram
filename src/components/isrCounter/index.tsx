// ISR Counter Component - Client component for interactivity
"use client";

import { useState, useEffect } from "react";

const ISRCounter = () => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("ISR Counter: Client-side hydration completed");
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#faf5ff", borderRadius: "8px" }}>
      <h4 style={{ marginBottom: "15px", color: "#7928ca" }}>ISR Counter Component</h4>
      <div style={{ marginBottom: "10px" }}>
        <strong style={{ color: "black" }}>Count:</strong> <span style={{ color: "black" }}>{count}</span>
      </div>
      {mounted && (
        <p style={{ fontSize: "12px", color: "#666", marginBottom: "15px" }}>
          Client-side hydration completed (interactivity enabled)
        </p>
      )}
      {!mounted && (
        <p style={{ fontSize: "12px", color: "#666", marginBottom: "15px" }}>
          Hydrating on client...
        </p>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#7928ca",
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
        Note: Page HTML is static but regenerates periodically. Counter state is client-side after hydration.
      </p>
    </div>
  );
};

export default ISRCounter;
