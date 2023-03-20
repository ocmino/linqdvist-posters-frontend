import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Meals from "./Meals/Meals";
import { FiChevronDown } from "react-icons/fi";

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

  const scrollDown = () => {
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={styleContainer}>
      <div style={{ ...styleAbout, color }}>
        <h1>Våra unika posters</h1>
      </div>

      <p style={{ ...styleText, color }}>
        Nedan hittar du våra unika posters och prints som är tillgängliga för
        köp. Här kan du hitta allt från färgglada grafiska prints till mer
        minimalistiska fotografier. Vi samarbetar endast med nordiska designers
        för att erbjuda våra kunder det mest autentiska och unika utbudet. Vårt
        sortiment är uppdelat i olika kategorier för att göra det enklare för
        dig att hitta rätt. Välj mellan storlekar som passar perfekt för att
        pryda väggen i din hall, vardagsrum eller sovrum. <br/><br/>Vi erbjuder också
        olika tekniker såsom tryck på papper eller canvas för att skapa en unik
        och personlig touch i ditt hem. Gör dig redo att förnya ditt hem med
        våra fantastiska posters och prints!
      </p>
      <button
        onClick={scrollDown}
        style={{
          position: "absolute",
          top: "95%",
          right: "10%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "transparent",
          border: "none",
          fontSize: "2rem",
          zIndex: "100",
        }}
      >
        <FiChevronDown />
      </button>
      <Meals />
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
