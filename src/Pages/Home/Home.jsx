import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div id="home">
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
    </div>
  );
};

export default Home;
