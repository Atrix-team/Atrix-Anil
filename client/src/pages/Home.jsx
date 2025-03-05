import React from "react";
import Hero from "../components/Hero";
import LogosMarquee from "../components/LogosMarquee";
import AboutSec from "../components/AboutSec";
import ServiceSec from "../components/ServiceSec";
import SolutionProcess from "../components/SolutionProcess";
import PortfolioSec from "../components/PortfolioSec";
import TechnologyIconsSec from "../components/TechnologyIconsSec";
import HeadingMarquee from "../components/headingMarquee";
import MyServicesSec from "../components/myServicesSec";
import VideoSection from "../components/VideoSection";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  console.log("hello wworld")

  return (
    <div>
      <Hero />
      <LogosMarquee />
      <AboutSec></AboutSec>
      <ServiceSec />
      {/* <MyServicesSec /> */}
      {/* <VideoSection /> */}
      <VideoBackground></VideoBackground>
      <SolutionProcess />
      <PortfolioSec />
      <TechnologyIconsSec />
      <HeadingMarquee />
    </div>
  );
};

export default Home;
