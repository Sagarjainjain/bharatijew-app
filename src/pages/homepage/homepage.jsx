import React from "react";
import "./homepage.css"
import Categories from "../../components/categories/categories";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/headers/header";
import GoldRate from "../../components/goldratepage/goldrate";
import TopPicks from "../../components/topPicks/toppicks";
import AboutUs from "../../components/aboutus/aboutus";
import Footer from "../../components/footer/footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <GoldRate />
      <Categories />
      <TopPicks />
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default Homepage;
