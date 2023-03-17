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
        Hos oss på LINDQVIST Posters kan du köpa posters online från
        många olika formgivare, så att du kan hitta något som passar ditt hem,
        oavsett stil och smak. Här möter du nordisk konst från fantastiska
        konstnärer, fotografer, illustratörer och designers - allt från
        affischer med naturmotiv, posters med växter och blommor, djur,
        insekter, kökstavlor eller inspirerande citat. Du kan med ny spännande
        konst på väggarna förändra hela känslan av ditt hem. <br/><br/>Det är en
        inredningsdetalj som på ett enkelt sätt låter dig förmedla din
        personlighet och stil. Tavlor, posters, affischer, prints, planscher -
        kärt barn har många namn! Här hittar du våra senaste nyheter från våra
        formgivare.
        <img style={{
          position: "absolute",
          top: "110%",
          left: "50%",
          width: "40%",
        }} src="/Pictures/signature.png" alt="poster" />
      </p>
    </div>
  );
}
