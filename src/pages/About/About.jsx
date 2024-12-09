import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BannerAbout from "../../assets/banner/aboutBanner.png";
import Footer from "../../components/footer/Footer";


const About = () => {
  return (
    <div className="about">
      <Header />
        <main>
          <Banner image={BannerAbout} titre="" />
        </main>
      <Footer />
    </div>
  );
};

export default About;