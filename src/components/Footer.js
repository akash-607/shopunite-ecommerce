import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>our stores</h3>
          <Link to="/">india</Link>
          <Link to="/">USA</Link>
          <Link to="/">japan</Link>
          <Link to="/">paris</Link>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <Link to="/">home</Link>
          <Link to="/">products</Link>
          <Link to="/">featured</Link>
          <Link to="/">review</Link>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <Link to="/">my account</Link>
          <Link to="/">my favorite</Link>
          <Link to="/">my orders</Link>
          <Link to="/">newsletter</Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to="/">facebook</Link>
          <Link to="/">twitter</Link>
          <Link to="/">instagram</Link>
          <Link to="/">linkedin</Link>
        </div>

        <div className="credit">
          created by <span> Akash </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
