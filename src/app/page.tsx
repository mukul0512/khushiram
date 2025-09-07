"use client";
import Intro from "@/components/home/intro";
import CustomButton from "@/components/customButton";
// import Hero from "@/components/home/hero";
// import OurBestFeatures from "@/components/home/ourBestFeatures";
// import TheMetricsOfOurImpact from "@/components/home/theMetricsOfOurImpact";

const Home = () => {
  return (
    <>
      <Intro />
      <div style={{ marginTop: "20px" }}>
        <CustomButton href="/services">Go to Services Page</CustomButton>
      </div>
      <div style={{ marginTop: "20px" }}>
        <CustomButton
          onClick={() =>
            alert("Congratulations! You have subscribed to our services")
          }
        >
          Subscribe Now
        </CustomButton>
      </div>
      {/* <Hero /> */}
      {/* <OurBestFeatures /> */}
      {/* <TheMetricsOfOurImpact /> */}
    </>
  );
};

export default Home;
