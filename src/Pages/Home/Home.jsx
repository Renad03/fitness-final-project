import React from "react";
import OurServices from "../../Components/ServicesSection/OurServices";
import OurPlans from "../../Components/PlanSection/OurPlans";
import SliderSection from "../../Components/Slider/Slider";
import AccordionSection from "../../Components/Accordion/AccordionSection";
import Hero from "../../Components/HeroSection/Hero"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <OurServices />
      <OurPlans />
      <SliderSection />
      <AccordionSection />
      <Footer />
    </div>
  );
};

export default Home;
