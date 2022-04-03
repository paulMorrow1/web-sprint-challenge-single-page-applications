import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link id="order-pizza" to="/pizza">
          Pizza
        </Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
    </div>
  );
}
