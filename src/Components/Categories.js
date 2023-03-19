import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import Cart from "./Cart/Cart";
import QRCode from "qrcode.react";
export default function Categories() {
  const [cartItems, setCartItems] = useState([]);
  const [modelUrl, setModelUrl] = useState("./Models/Poster.gltf");
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

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

  const styleCategories = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    top: "75%",
    left: "50%",
    width: "80%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
  };

  const addToCartButton = {
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  };

  // Media query to change the font size
  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    styleAbout.fontSize = "0.6rem";
    styleAbout.top = "10%";
    styleCategories.fontSize = "0.7rem";
    styleCategories.flexDirection = "column";
    styleCategories.top = "65%";
    addToCartButton.fontSize = "0.5rem";
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
      <Cart cartItems={cartItems} />
      <div style={{ ...styleAbout, color }}>
        <h1>Våra unika posters</h1>
      </div>

      <div style={{ ...styleCategories, color }}>
        <div>
          <p1>Poster 1 - 299 SEK</p1>
          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546"
            alt="Category 1"
          />
          <button
            style={addToCartButton}
            onClick={() => addToCart({ name: "Poster 1", price: 399 })}
          >
            Lägg till i kundvagnen
          </button>
        </div>

        <div>
          <p1>Poster 2 - 399 SEK</p1>

          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/imagination-loa-1_360x.jpg?v=1574715772"
            alt="Category 1"
          />
          <button
            style={addToCartButton}
            onClick={() => addToCart({ name: "Poster 2", price: 399 })}
          >
            Lägg till i kundvagnen
          </button>
        </div>

        <div>
          <p1>Poster 3 - 249 SEK</p1>

          <img
            src="https://cdn.shopify.com/s/files/1/2469/4477/products/iceland-2-1_360x.jpg?v=1520528278"
            alt="Category 1"
          />
          <button
            style={addToCartButton}
            onClick={() => addToCart({ name: "Poster 3", price: 249 })}
          >
            Lägg till i kundvagnen
          </button>
        </div>
      </div>
    </div>
  );
}
