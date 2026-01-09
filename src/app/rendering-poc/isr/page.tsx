// ISR (Incremental Static Regeneration) Example
// This page is static but can be regenerated periodically
import ISRCounter from "@/components/isrCounter";

// ISR is achieved using the revalidate option in Next.js
// export const revalidate = 10; // Revalidate every 10 seconds

// For demonstration, we'll show both the initial build time and potential revalidation
const ISRPage = async () => {
  // This timestamp is generated at build time OR when the page is regenerated
  const renderTime = new Date().toISOString();

  // In a real app, this would fetch from a database or API
  // The page will be statically generated, but can be regenerated in the background
  const staticData = {
    message:
      "This page is statically generated but can regenerate periodically",
    version: "1.0",
  };

  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        ISR (Incremental Static Regeneration) Example
      </h3>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "2px solid #7928ca",
          borderRadius: "8px",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          <strong>Rendering Type:</strong> Incremental Static Regeneration (ISR)
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>When:</strong> Static at build time + can regenerate
          periodically
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Current Render Time:</strong> {renderTime}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Version:</strong> {staticData.version}
        </p>
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "#f9f5ff",
            borderRadius: "8px",
          }}
        >
          <p style={{ marginBottom: "10px", color: "#666" }}>
            <strong>How ISR Works:</strong>
          </p>
          <ul style={{ marginLeft: "20px", color: "#666", lineHeight: "1.8" }}>
            <li>Page is statically generated at build time (like SSG)</li>
            <li>
              After the revalidation period, Next.js regenerates the page in the
              background
            </li>
            <li>Users get the cached static page immediately</li>
            <li>Next request after revalidation gets the fresh page</li>
          </ul>
        </div>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          <strong>To enable ISR:</strong> Uncomment{" "}
          <code>export const revalidate = 10;</code> in this file. Then the page
          will regenerate every 10 seconds. Check the page source (View Source)
          - you&apos;ll see static HTML that updates periodically.
        </p>
        <ISRCounter />
      </div>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/rendering-poc"
          style={{ color: "#7928ca", textDecoration: "underline" }}
        >
          ← Back to Rendering POC
        </a>
      </div>
    </>
  );
};

// Uncomment the line below to enable ISR with 10-second revalidation
// export const revalidate = 10;

export default ISRPage;
