import React, { useState, useEffect } from "react";

export default function Contact() {
  // Style for the title
  const styleContact = {
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
    padding: "20px"
  };

  const styleTextDiv = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    backgroundColor: "black",
    opacity: "0.2",
    padding: "20px",
    width: "50%",
    height: "25%",
    borderRadius: "10px",
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
      <div style={{ ...styleTextDiv, color }}>
        
      </div>
      <p style={{ ...styleText, color }}>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <label>
              Message:
              <input type="text" name="message" />
            </label>
            <input type="submit" value="Submit" />

          </form>
        </p>
    </div>
  );
}
