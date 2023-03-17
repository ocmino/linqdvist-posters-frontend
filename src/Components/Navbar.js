import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function Navbar() {
  let style = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 20px",
    height: "40px",
    width: "100vw",
    color: "white",
    textTransform: "uppercase",
    zIndex: "1",
    fontSize: "1rem",
    left: "50%",
    transform: "translate(-50%, 0)",

  };

  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    style.fontSize = "0.7rem";
  }

  return (
    <div style={style}>
      <Link
        to="/"
        style={{
          color: "black",
          textDecoration: "none",

          fontWeight: "bold",
        }}
      >
        Hem
      </Link>

      <Link
        to="/about"
        style={{
          color: "black",
          textDecoration: "none",

          fontWeight: "bold",
        }}
      >
        Om oss
      </Link>
      <Link
        to="/categories"
        style={{
          color: "black",
          textDecoration: "none",

          fontWeight: "bold",
        }}
      >
        Våra posters
      </Link>
      <Link
        to="/gallery"
        style={{
          color: "black",
          textDecoration: "none",

          fontWeight: "bold",
        }}
      >
        Virtuellt galleri
      </Link>
      <Link
        to="/contact"
        style={{
          color: "black",
          textDecoration: "none",

          fontWeight: "bold",
        }}
      >
        Kontakt
      </Link>
    </div>
  );
}
