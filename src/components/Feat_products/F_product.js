import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function F_product({
  prod_name,
  org_price,
  fin_price,
  img_list,
  description,
  rating,
}) {
  const [cur_image, setcur_image] = useState(0);
  return (
    <div className="row">
      <div className="image-container">
        <div className="small-image">
          {img_list.map((e, i) => (
            <img
              key={i}
              onClick={() => setcur_image(i)}
              src={e}
              className="featured-image-1"
              alt=""
            />
          ))}
        </div>
        <div className="big-image">
          {/* <img src="images/f-img-1.1.png" className="big-image-1" alt=""> */}
          <img src={img_list[cur_image]} alt="" />
        </div>
      </div>
      <div className="content">
        <h3>{prod_name}</h3>
        <div className="stars">
          {[...Array(rating)].map((x, i) => (
            <FaStar
              key={i}
              className="rat__icons"
              fontSize="1.8rem"
              color="orange"
              style={{ margin: "0 .2rem" }}
            />
          ))}
          {[...Array(5 - rating)].map((x, i) => (
            <FaRegStar
              key={i}
              Name="rat__icons"
              fontSize="1.8rem"
              color="orange"
              style={{ margin: "0 .2rem" }}
            />
          ))}
          {/* <FaStar  color="orange" classNameName="rat__icons" />
          <FaStar fontSize="1.8rem" color="orange" classNameName="rat__icons" />
          <FaStar fontSize="1.8rem" color="orange" classNameName="rat__icons" />
          <FaStar fontSize="1.8rem" color="orange" classNameName="rat__icons" />
          <FaStar fontSize="1.8rem" color="orange" classNameName="rat__icons" /> */}
        </div>
        <p>{description}</p>
        <div className="price">
          ₹{fin_price} <span>₹{org_price}</span>
        </div>
        <button className="btn">add to cart</button>
      </div>
    </div>
  );
}

export default F_product;
