// Commented out for Rendering POC - preserving original code
// import CustomButton from "@/components/customButton";
// import CustomServer from "@/components/customServer";

// const Home = () => {
//   return (
//     <>
//       <h3 className="commonHeading" style={{ marginTop: "20px" }}>
//         Server Page
//       </h3>
//       <div style={{ marginTop: "20px" }}>
//         <CustomServer />
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <CustomButton href="/">Go to Home Page</CustomButton>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <CustomButton href="/client">Go to Client Page</CustomButton>
//       </div>
//     </>
//   );
// };

// export default Home;

// Rendering POC: SSR Example
// This page is Server-Side Rendered - generated on the server for each request
import SSRCounter from "@/components/ssrCounter";

const ServerPage = async () => {
  // Fetch data or perform server-side operations
  const buildTime = new Date().toISOString();
  
  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        SSR (Server-Side Rendering) - Server Page
      </h3>
      <div style={{ marginTop: "20px", padding: "20px", border: "2px solid #333", borderRadius: "8px" }}>
        <p style={{ marginBottom: "10px" }}>
          <strong>Rendering Type:</strong> Server-Side Rendering (SSR)
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>When:</strong> Generated on the server for each request
        </p>
        <p style={{ marginBottom: "10px" }}>
          <strong>Server Render Time:</strong> {buildTime}
        </p>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          This page is rendered on the server every time a request is made. 
          Check the page source (View Source) - you'll see the counter HTML already present.
        </p>
        <SSRCounter />
      </div>
    </>
  );
};

export default ServerPage;
