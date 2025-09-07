import CustomButton from "@/components/customButton";
import CustomServer from "@/components/customServer";

const Home = () => {
  return (
    <>
      <h3 className="commonHeading" style={{ marginTop: "20px" }}>
        Server Page
      </h3>
      <div style={{ marginTop: "20px" }}>
        <CustomServer />
      </div>
      <div style={{ marginTop: "20px" }}>
        <CustomButton href="/">Go to Home Page</CustomButton>
      </div>
      <div style={{ marginTop: "20px" }}>
        <CustomButton href="/client">Go to Client Page</CustomButton>
      </div>
    </>
  );
};

export default Home;
