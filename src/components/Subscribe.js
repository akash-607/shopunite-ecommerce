import React from "react";

function Subscribe() {
  return (
    <section className="newsletter">
      <div className="content">
        <h3>Subscribe to our Offers</h3>
        <p>Enter your mail id to get latest offers and deals</p>
        <form action="">
          <input type="email" placeholder="enter your email" className="box" />
          <button className="btn">send</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
