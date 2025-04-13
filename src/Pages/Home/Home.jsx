import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Footer from "../../Components/Frame462/Footer";

const Home = () => {
  return (
    <div>
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
      <Footer />
    </div>
  );
};

export default Home;
