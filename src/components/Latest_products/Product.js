import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Product({ name, org_price, fin_price, img_src, rating }) {
  return (
    <div className="box">
      <img src={img_src} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <div className="price">
          ₹{fin_price} <span>₹{org_price}</span>
        </div>
        <div className="stars">
          {[...Array(rating)].map((x, i) => (
            <FaStar
              key={i}
              size={18}
              color="orange"
              style={{ margin: "0 .2rem" }}
            />
          ))}
          {[...Array(5 - rating)].map((x, i) => (
            <FaRegStar
              key={i}
              size={18}
              color="orange"
              style={{ margin: "0 .2rem" }}
            />
          ))}
        </div>
        <button href="#" className="btn">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
