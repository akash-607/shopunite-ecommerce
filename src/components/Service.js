import React from "react";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";

function Service() {
  return (
    <section className="service">
      <div className="box-container">
        <div className="box">
          <FaShippingFast size={50} color="orange" />
          <h3>fast delivery</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            fugit.
          </p>
        </div>

        <div className="box">
          <FaUndo size={50} color="orange" />
          <h3>10 days replacements</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            fugit.
          </p>
        </div>

        <div className="box">
          <FaHeadset size={50} color="orange" />
          <h3>24 x 7 support</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            fugit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
