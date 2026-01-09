// SSG (Static Site Generation) Example
// This page is pre-rendered at build time and served as static HTML
import SSGCounter from "@/components/ssgCounter";

// This page is SSG by default in Next.js App Router (no dynamic functions)
// The timestamp below is generated at BUILD TIME, not request time
const SSGPage = () => {
  // This timestamp is generated at BUILD TIME
  const buildTime = new Date().toISOString();

  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        SSG (Static Site Generation) Example
      </h3>
      <div style={{ marginTop: "20px", padding: "20px", border: "2px solid #0070f3", borderRadius: "8px" }}>
        <p style={{ marginBottom: "10px" }}>
          <strong>Rendering Type:</strong> Static Site Generation (SSG)
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>When:</strong> Pre-rendered at BUILD TIME
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Build Time (frozen):</strong> {buildTime}
        </p>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          This page was generated when you ran <code>npm run build</code>. 
          The timestamp above will NOT change until you rebuild. 
          Check the page source (View Source) - you&apos;ll see all HTML is already present.
          The counter interactivity is added via client-side hydration.
        </p>
        <SSGCounter />
      </div>
      <div style={{ marginTop: "20px" }}>
        <a href="/rendering-poc" style={{ color: "#0070f3", textDecoration: "underline" }}>
          ← Back to Rendering POC
        </a>
      </div>
    </>
  );
};

export default SSGPage;
