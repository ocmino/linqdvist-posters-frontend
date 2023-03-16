export default function Home() {
  const background = "./Pictures/First.png";

  //background image
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "50%",
    height: "50%",
    borderRadius: "10px",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  const text = {
    position: "absolute",
    top: "71vh",
    left: "26%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "50%",
    height: "50%",
  };

  return (
    <div style={style}>
      <div style={text}>
        <h2>Gör ditt hem mer personligt</h2>
        <p>
          Upptäck vårt stora utbud av vackra och unika posters och prints som du
          inte hittar någon annanstans. Du som uppskattar att vara ensam om dina
          inredningsdetaljer och vill stödja nordiska designers har hittat helt
          rätt. Passa på att pryda flera väggar åt gången
        </p>
      </div>
    </div>
  );
}
