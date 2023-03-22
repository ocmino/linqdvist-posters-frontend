import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";

export default function About() {
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
    styleText.fontSize = "0.8rem";
    styleText.width = "85%";
    styleText.top = "50%";
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
        <h1>Om oss</h1>
      </div>

      <p style={{ ...styleText, color }}>
        Här på LINDQVIST Posters har vi ett brett utbud av posters online från
        många olika formgivare, vilket innebär att oavsett din stil eller smak
        så kan du hitta något som passar perfekt i ditt hem. Vi erbjuder unik
        konst från fantastiska 3D-grafiker och konstnärer - allt från naturliga motiv som natur och växter till djur,
        insekter, kökstavlor och inspirerande citat. Genom att lägga till en ny
        och spännande konst på dina väggar kan du förändra hela känslan av ditt
        hem på ett enkelt sätt. <br/><br/>Att välja tavlor, posters, affischer, prints
        eller planscher är en inredningsdetalj som låter dig förmedla din
        personlighet och stil på ett unikt sätt. Vi vet att kärt barn har många
        namn, men oavsett vad du kallar det så hittar du det här hos oss.
        Utforska vårt senaste urval från våra formgivare och upptäck det
        perfekta tillskottet till ditt hem. formgivare.
        <img
          style={{
            position: "absolute",
            top: "110%",
            left: "50%",
            width: "40%",
          }}
          src="/Pictures/signature.png"
          alt="poster"
        />
      </p>
    </div>
  );
}
