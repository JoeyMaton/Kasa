import React from "react";
import Banner from "../../components/banner/Banner";
import HomeBanner from "../../assets/banner/homeBanner.png";
import Header from "../../components/header/Header";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={HomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;