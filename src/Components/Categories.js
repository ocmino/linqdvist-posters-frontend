import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Meals from "./Meals/Meals";

export default function Categories() {
  const styleContainer = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
  };
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

  //create a style for the posters, like a photo gallery
  const stylePosters = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "50%",
    height: "50%",
    borderRadius: "10px",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "50px",
  };

  const styleText = {
    position: "absolute",
    top: "50%",
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
    styleContainer.height = "100vh";
    styleContainer.width = "100vw";
    styleAbout.fontSize = "0.8rem";
    stylePosters.fontSize = "0.8rem";
    stylePosters.width = "85%";
    stylePosters.top = "50%";
    stylePosters.left = "50%";
    stylePosters.gridTemplateColumns = "repeat(1, 1fr)";
    stylePosters.gridGap = "1rem";
    stylePosters.top = "300%";
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
    <div style={styleContainer}>
      <div style={{ ...styleAbout, color }}>
        <h1>Våra unika posters</h1>
      </div>

      <p style={{ ...styleText, color }}>
        Nedan hittar du våra unika posters. Vi har valt ut de bästa och mest unika 
        posters som vi tror att du kommer att gilla. Vi har valt ut posters som
        är både vackra och inspirerande. Vi hoppas att du kommer att hitta något
        som du gillar.

      </p>

     <Meals 
      style={{ ...stylePosters, color }}
      />

    
    </div>
  );
}
/*<p style={{ ...stylePosters, color }}>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_540x.jpg?v=1541006626"
  alt="poster1"
  style={{ width: "95%" }}
/>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/vinterns-magi-1_540x.jpg?v=1568752238"
  alt="poster1"
  style={{ width: "95%" }}
/>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/imagination-loa-1_540x.jpg?v=1574715772"
  alt="poster1"
  style={{ width: "95%" }}
/>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_540x.jpg?v=1541006626"
  alt="poster1"
  style={{ width: "95%" }}
/>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_540x.jpg?v=1541006626"
  alt="poster1"
  style={{ width: "95%" }}
/>
<img
  src="https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_540x.jpg?v=1541006626"
  alt="poster1"
  style={{ width: "95%" }}
/>
</p>*/
