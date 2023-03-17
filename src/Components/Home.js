import { FiChevronDown } from "react-icons/fi";
import { useMediaQuery } from "@mantine/hooks";
export default function Home() {
  //array of background images
  const background = ["./Pictures/HomePage.jpeg", "./Pictures/First.png"];

  const styleContainer = {
    position: "absolute",
    top: "0",
    left: "0",
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
    top: "92vh",
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
    top: "150%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const styleImg = {
    position: "absolute",
            top: "103%",
            left: "60%",
            width: "40%",

  };

  const imgSrc = [
    "./Pictures/LogoType.png",
   ]

  // Media query to change the font size
  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    styleContainer.height = "100%";
    styleContainer.width = "100%";
    style.width = "100%";
    posters.gridTemplateColumns = "repeat(1, 1fr)";
    posters.gridGap = "10px";
    posters.top = "200%";
    styleImg.width = "25%";
    text.fontSize = "0.7rem";
    text.width = "85%";
    text.left = "50%";
  }

  //function to scroll down to the posters
  const scrollDown = () => {
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={styleContainer}>
      <div style={style}>
        <img style={styleImg} 

          src={imgSrc}
          alt="poster"
        />
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
        }}
      >
        <FiChevronDown />
      </button>

      <div style={selectedPosters}>
        <h2>Utvalda posters</h2>
      </div>

      <div style={posters}>
        <img
          src="https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546"
          alt="Category 1"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546"
          alt="Category 1"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546"
          alt="Category 1"
        />
        <br />
      </div>
    </div>
  );
}
