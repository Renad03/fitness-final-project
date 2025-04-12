import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import Heading from "../../Components/Heading/Heading";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";

const Home = () => {
  return (
    <div>
      {/* <p>Navbar</p>
            <OurPlans /> */}
      <Heading />
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
    </div>
  );
};

export default Home;
