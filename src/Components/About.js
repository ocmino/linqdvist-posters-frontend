import React, { useState, useEffect } from "react";

export default function About() {
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
        <h1>About</h1>
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
      </p>
    </div>
  );
}