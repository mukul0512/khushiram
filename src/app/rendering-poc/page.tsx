// Rendering POC Main Page - Navigation hub
import CustomButton from "@/components/customButton";

const RenderingPOCPage = () => {
  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        Next.js Rendering Types - Proof of Concept
      </h3>
      <div style={{ marginTop: "20px", padding: "20px" }}>
        <p style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.6" }}>
          This POC demonstrates the four main rendering types in Next.js. 
          Each page includes a counter example to understand how rendering works differently in each approach.
        </p>
        
        <div style={{ display: "grid", gap: "20px", maxWidth: "800px" }}>
          <div style={{ padding: "20px", border: "2px solid #0070f3", borderRadius: "8px" }}>
            <h4 style={{ marginBottom: "10px", color: "#0070f3" }}>1. SSG (Static Site Generation)</h4>
            <p style={{ marginBottom: "15px", color: "#666" }}>
              Pages are pre-rendered at build time. Content is static until next build.
            </p>
            <CustomButton href="/rendering-poc/ssg">View SSG Example</CustomButton>
          </div>

          <div style={{ padding: "20px", border: "2px solid #ff0080", borderRadius: "8px" }}>
            <h4 style={{ marginBottom: "10px", color: "#ff0080" }}>2. SSR (Server-Side Rendering)</h4>
            <p style={{ marginBottom: "15px", color: "#666" }}>
              Pages are generated on the server for each request. Content is fresh per request.
            </p>
            <CustomButton href="/rendering-poc/ssr">View SSR Example</CustomButton>
          </div>

          <div style={{ padding: "20px", border: "2px solid #00d9ff", borderRadius: "8px" }}>
            <h4 style={{ marginBottom: "10px", color: "#00d9ff" }}>3. CSR (Client-Side Rendering)</h4>
            <p style={{ marginBottom: "15px", color: "#666" }}>
              Pages are rendered entirely in the browser using JavaScript.
            </p>
            <CustomButton href="/rendering-poc/csr">View CSR Example</CustomButton>
          </div>

          <div style={{ padding: "20px", border: "2px solid #7928ca", borderRadius: "8px" }}>
            <h4 style={{ marginBottom: "10px", color: "#7928ca" }}>4. ISR (Incremental Static Regeneration)</h4>
            <p style={{ marginBottom: "15px", color: "#666" }}>
              Pages are static but can be regenerated periodically without rebuilding the entire site.
            </p>
            <CustomButton href="/rendering-poc/isr">View ISR Example</CustomButton>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <CustomButton href="/">Go to Home Page</CustomButton>
        </div>
      </div>
    </>
  );
};

export default RenderingPOCPage;
