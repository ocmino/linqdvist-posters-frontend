import React, { useState, useEffect } from "react";

export default function Contact() {
  // Style for the title
  const styleContact = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
  };

  const styleFormContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    padding: "20px",
    width: "60%",
    height: "50%",
    borderRadius: "10px",
  };

  const styleForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  };

  const styleLabel = {
    marginBottom: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const styleInput = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "1rem",
  };

  const styleButton = {
    position: "relative",
    width: "25%",
    top: "50px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    background: "black",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
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
      <div style={{ ...styleContact, color }}>
        <h1>Kontakta oss</h1>
      </div>
      <div style={{ ...styleFormContainer }}>
        <form style={{ ...styleForm }}>
          <label style={{ ...styleLabel }}>Namn</label>
          <input
            style={{ ...styleInput }}
            type="text"
            name="name"
            placeholder="Ange ditt namn"
            required
          />
          <label style={{ ...styleLabel }}>E-post</label>
          <input
            style={{ ...styleInput }}
            type="email"
            name="email"
            placeholder="Ange din e-postadress"
            required
          />
          <label style={{ ...styleLabel }}>Meddelande</label>
          <textarea
            style={{ ...styleInput, height: "150px" }}
            name="message"
            placeholder="Skriv ditt meddelande här"
            required
          ></textarea>
          <input style={{ ...styleButton }} type="submit" value="Skicka" />
        </form>
      </div>
    </div>
  );
}
