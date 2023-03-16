import React from "react";
import { Link } from "react-router-dom";

const style = {
  position: "fixed",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "0 20px",
  height: "60px",
  width: "100%",
  color: "white",
  textTransform: "uppercase",
  zIndex: "1",
};

export default function Navbar() {
  return (
    <div style={style}>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        About
      </Link>
      <Link to="/categories"
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      >Categories</Link>
      <Link to="/gallery"
      style={{
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
      >Gallery</Link>
      <Link
        to="/contact"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Contact
      </Link>
    </div>
  );
}
