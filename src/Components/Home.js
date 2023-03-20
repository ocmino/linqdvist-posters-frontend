import { FiChevronDown } from "react-icons/fi";
import { useMediaQuery } from "@mantine/hooks";
import { Environment } from "@react-three/drei";
export default function Home() {
  //array of background images
  const background = ["./Pictures/HomePage.jpeg", "./Pictures/First.png"];

  //container
  const styleContainer = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  };

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
    backgroundImage: `url(${background[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  const text = {
    position: "absolute",
    top: "93vh",
    left: "42%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "35%",
    height: "50%",
  };

  const selectedPosters = {
    position: "absolute",
    top: "110%",
    left: "50%",

    transform: "translate(-50%, -50%)",
  };

  const posters = {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "50px",
    top: "160%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const styleImg = {
    position: "absolute",
    top: "104%",
    left: "64%",
    width: "35%",
  };

  const imgSrc = ["./Pictures/LogoType.png"];

  // Media query to change the font size
  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    styleContainer.height = "100vh";
    styleContainer.width = "100vw";
    style.width = "100%";
    selectedPosters.top = "105%";
    posters.gridTemplateColumns = "repeat(1, 1fr)";
    posters.gridGap = "10px";
    posters.top = "197.5%";
    styleImg.width = "50%";
    styleImg.top = "-7.5%";
    styleImg.left = "50%";
    styleImg.transform = "translate(-50%, -50%)";
    text.fontSize = "0.65rem";
    text.width = "85%";
    text.left = "50%";
  }

  return (
    <div style={styleContainer}>
      <div style={style}>
        <img style={styleImg} src={imgSrc} alt="poster" />
      </div>

      <div style={text}>
        <h2>Gör ditt hem mer personligt</h2>
        <p>
          Upptäck vårt spännande utbud av vackra och unika posters och prints
          som du garanterat inte hittar någon annanstans. Du som uppskattar att
          vara ensam om dina inredningsdetaljer och vill stödja nordiska
          designers har hittat helt rätt. Passa på att pryda flera väggar åt
          gången och skapa ett härligt hem fyllt med snygga posters och
          affischer. I vårt härliga utbud hittar du något för alla väggar i
          hemmet. Du kan se alla motiv utifrån kategori, teknik eller storlek
          vilket underlättar att hitta posters i just din stil.
        </p>
      </div>
    </div>
  );
}
