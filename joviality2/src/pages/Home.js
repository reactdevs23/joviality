import React from "react";

import { HeroSection } from "../components/HeroSection/HeroSection";
import { Exposure } from "../components/Exposure/Exposure";
import { PerfectlyPolished } from "../components/PerfectlyPolished/PerfectlyPolished";
import UnderstoodOurself from "../components/UnderstoodOurself/UnderstoodOurself";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Exposure />
      <PerfectlyPolished />
      <UnderstoodOurself />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
