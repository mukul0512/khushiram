// SSR Counter Component - Client component for interactivity
"use client";

import { useState, useEffect } from "react";

const SSRCounter = () => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("SSR Counter: Client-side hydration completed");
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff0f7", borderRadius: "8px" }}>
      <h4 style={{ marginBottom: "15px", color: "#ff0080" }}>SSR Counter Component</h4>
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
            backgroundColor: "#ff0080",
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
            backgroundColor: "#0070f3",
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
        Note: Page HTML is generated fresh on server per request, counter state is client-side after hydration.
      </p>
    </div>
  );
};

export default SSRCounter;
