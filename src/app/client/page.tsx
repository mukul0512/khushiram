"use client";
import CustomClient from "@/components/customClient";
import CustomButton from "@/components/customButton";
import CustomCounter from "@/components/customCounter";

const Home = () => {
  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        Client Page
      </h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <CustomCounter />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "15px" }}>
          <CustomClient />
        </div>
        <div style={{ marginTop: "15px" }}>
          <CustomButton
            onClick={() =>
              alert("You have successfully unsubscribed our services")
            }
          >
            Unsubscribe
          </CustomButton>
          <div style={{ marginTop: "20px" }}>
            <CustomButton href="/server">Go to Server Page</CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
