import React from "react";
import user_reviews from "../../data/user_reviews";
import Review from "./Review";

function Reviews() {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        {" "}
        customer's <span>review</span>{" "}
      </h1>

      <div className="box-container">
        {user_reviews.map((e, i) => (
          <Review
            key={i}
            dp={e.profile_pic}
            username={e.username}
            review={e.review}
            rating={e.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
