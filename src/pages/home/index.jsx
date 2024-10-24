import React from "react";
import "./index.scss";
import Hero from "../../components/hero";
import PopularLocations from "../../components/popularLocations";
import ServiceSection from "../../components/ServiceSection";
import Features from "../../components/features";
import Testimonials from "../../components/testimonials";

function HomePage() {
  return <div 
  style={{ marginTop: "135px",}}>
    <Hero />
    <PopularLocations/>
    <ServiceSection/>
    <Testimonials/>
    <Features/>
  </div>;
}

export default HomePage;
