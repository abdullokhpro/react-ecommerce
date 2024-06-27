import React from "react";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Shop from "../../components/shop/Shop";
import News from "../../components/news/News";
import Feature from "../../components/feature/Feature";

const Home = () => {
  return (
    <>
      <Hero />
      <Shop />
      <Services />
      <News />
      <Feature />
    </>
  );
};

export default Home;
