import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";

const Home = () => {
  return (
    <div>
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
    </div>
  );
};

export default Home;
