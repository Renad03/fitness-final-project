import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Hero from "../../Components/HeroSection/Hero"
const Home = () => {
  return (
    <>
    <Hero />
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
    </>
  );
};

export default Home;
