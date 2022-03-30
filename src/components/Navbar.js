import React from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>

      <Link to="/" className="logo">
        Shopunite
      </Link>

      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/">products</Link>
        <Link to="/">featured</Link>
        <Link to="/">review</Link>
      </nav>

      <div className="icons_nav">
        <button>
          <FaHeart style={{ margin: "0 0.7rem" }} size={25} />
        </button>
        <button>
          <FaShoppingCart style={{ margin: "0 0.7rem" }} size={25} />
        </button>
        <button>
          <FaUser style={{ margin: "0 0.7rem" }} size={25} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
