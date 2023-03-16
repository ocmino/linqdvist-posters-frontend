import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
  };

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
        <h1>Categories</h1>
      </div>

      <div style={{ ...styleCategories, color }}>
        <Link>
            <h1>Category 1</h1>
        </Link>
        <Link>
            <h1>Category 2</h1>
        </Link>
        <Link>
            <h1>Category 3</h1>
        </Link>
      </div>
    </div>
  );
}
