// SSR (Server-Side Rendering) Example
// This page is rendered on the server for each request
import SSRCounter from "@/components/ssrCounter";

// This is SSR because we're using async function that fetches data
// In Next.js App Router, async server components are SSR by default
const SSRPage = async () => {
  // This timestamp is generated on EVERY REQUEST
  const requestTime = new Date().toISOString();
  
  // Simulate server-side data fetching
  // In a real app, this could be a database query, API call, etc.
  const serverData = {
    message: "This data is fetched on the server for each request",
    requestId: Math.random().toString(36).substring(7),
  };

  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        SSR (Server-Side Rendering) Example
      </h3>
      <div style={{ marginTop: "20px", padding: "20px", border: "2px solid #ff0080", borderRadius: "8px" }}>
        <p style={{ marginBottom: "10px" }}>
          <strong>Rendering Type:</strong> Server-Side Rendering (SSR)
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>When:</strong> Generated on the server for EACH REQUEST
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Request Time (fresh each time):</strong> {requestTime}
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Request ID:</strong> {serverData.requestId}
        </p>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          This page is rendered on the server every time you refresh or visit. 
          Notice how the timestamp and Request ID change on each refresh. 
          Check the page source (View Source) - you&apos;ll see the HTML with current values.
          The counter interactivity is added via client-side hydration.
        </p>
        <SSRCounter />
      </div>
      <div style={{ marginTop: "20px" }}>
        <a href="/rendering-poc" style={{ color: "#ff0080", textDecoration: "underline" }}>
          ← Back to Rendering POC
        </a>
      </div>
    </>
  );
};

export default SSRPage;
