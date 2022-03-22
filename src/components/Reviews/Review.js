import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Review({ username, review, dp, rating }) {
  return (
    <div className="box">
      <img src={dp} />
      <h3>{username}</h3>
      <p>{review}</p>
      <div className="stars">
        {[...Array(rating)].map((x, i) => (
          <FaStar key={i} size={25} color="orange" />
        ))}
        {[...Array(5 - rating)].map((x, i) => (
          <FaRegStar key={i} color="orange" size={25} />
        ))}
        {/* <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i> */}
      </div>
    </div>
  );
}

export default Review;
