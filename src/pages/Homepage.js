import React from "react";
import Carousel from "../components/Carousel";
import F_products from "../components/Feat_products/F_products";
import Footer from "../components/Footer";
import Products from "../components/Latest_products/Products";
import Reviews from "../components/Reviews/Reviews";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";

function Homepage() {
  return (
    <div className="hm_root_container">
      <Carousel />
      <Service />
      <Products />
      <F_products />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Homepage;
