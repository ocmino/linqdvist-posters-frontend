import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function Categories() {
  // Style for the title
  const styleAbout = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
  };

  const styleCategories = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
  };

  // Media query to change the font size
  const isMobile = useMediaQuery("(max-width: 600px)");
if (isMobile) {
  styleAbout.fontSize = "0.7rem";
  styleAbout.top = "20%";
  styleCategories.fontSize = "0.7rem";
  styleCategories.flexDirection = "column";
  styleCategories.top = "140%";
}



  // Color state and interval timer to update the color
  const [color, setColor] = useState("black");
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => (prevColor === "black" ? "black" : "black"));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ ...styleAbout, color }}>
        <h1>Våra unika posters</h1>
      </div>

      <div style={{ ...styleCategories, color }}>
        <Link
          style={{
            padding: "20px",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546"
            alt="Category 1"
          />
        </Link>
        <Link
          style={{
            padding: "20px",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/imagination-loa-1_360x.jpg?v=1574715772"
            alt="Category 2"
          />
        </Link>
        <Link
          style={{
            padding: "20px",
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/iceland-2-1_360x.jpg?v=1520528278"
            alt="Category 3"
          />
        </Link>
      </div>
    </div>
  );
}
