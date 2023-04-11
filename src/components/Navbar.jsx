import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main">
      <div className="left-div">
        <h2>ReactRouter</h2>
      </div>
      <div className="right-div">
        <ul className="ul">
          <li className="li">
            <Link to="/"> Home</Link>
          </li>
          <li className="li">
            <Link to="/product">Product</Link>
          </li>
          <li className="li">
            <Link to="/contactus">Contactus</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
