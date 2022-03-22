import React, { useState } from "react";
import home_image from "../assets/images/home_image.jpg";
import home_image_small from "../assets/images/home_image_small.jpg";
import Carousel from "react-material-ui-carousel";
import cimg from "../assets/images/cimg1.jpg";

function Carousel_home() {
  let images = [
    "https://assets.tatacliq.com/medias/sys_master/images/33132898025502.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/33165909721118.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/33165644988446.jpg",
    "https://assets.tatacliq.com/medias/sys_master/images/32554813325342.jpg",
  ];
  const [active, setactive] = useState(0);
  return (
    <section className="home" id="home">
      <div className="cover_image">
        <img src={home_image} alt="" />
      </div>
      <div className="cover_image_small d-none">
        <img src={home_image_small} alt="" />
      </div>
      {/* {images.map((e, i) => {
        return (
          <div className={`slide-container${active == i ? " active" : ""}`}>
            <div className="slide">
              <img style={{ width: "100%" }} src={e} alt="" />
            </div>
          </div>
        );
      })}

      <div
        id="prev"
        className="fas fa-chevron-left"
        onClick={() => {
          if (active == 0) {
            setactive(images.length - 1);
          } else {
            setactive(active - 1);
          }
        }}
      ></div>
      <div
        id="next"
        className="fas fa-chevron-right"
        onClick={() => {
          if (active >= images.length - 1) {
            setactive(0);
          } else {
            setactive(active + 1);
          }
        }}
      ></div> */}
    </section>
  );
}

export default Carousel_home;
