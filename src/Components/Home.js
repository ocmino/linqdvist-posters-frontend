
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  //array of background images
  const background = ["./Pictures/HomePage.jpeg", "./Pictures/First.png"];

  //container
  const styleContainer = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
  };

  //background image
  const style = {
    position: "absolute",
    top: "37.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "45%",
    height: "45%",
    borderRadius: "10px",
    backgroundImage: `url(${background[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  const styleText = {
    position: "absolute",
    top: "79%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "20px",
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
    top: "105%",
    left: "62%",
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
    styleText.fontSize = "0.65rem";
    styleText.width = "85%";
    styleText.left = "50%";
  }

  return (
    <div style={styleContainer}>
      <div style={style}>
        <img style={styleImg} src={imgSrc} alt="poster" />
      </div>

      <div style={styleText}>
        <h2>Gör ditt hem mer personligt</h2>
        <p>
          Utforska vårt fantastiska utbud av digitala posters och prints,
          skapade av talangfulla 3D-grafiker för att ge dina väggar en modern
          och unik touch. Vår samling av posters är helt digital och skapas från scratch i
          3D-program som Blender och Maya. Varför
          inte skapa en samling av olika motiv och kategorier för att ge ditt
          hem en personlig touch? Från abstrakta konstverk till realistiska
          landskap, vår samling har något som passar just din stil och
          personlighet. Utforska vår samling baserat på storlek, teknik eller
          kategori och hitta din favorit idag. <br/><br/>Vi tror på att stödja och lyfta
          fram datorgrafiker och vi är stolta över att erbjuda ett utbud av
          digitala posters som är både vackra och unika. Ge dina väggar liv med
          våra digitala posters och skapa en inredning som du kommer att älska i
          åratal framöver.
        </p>
      </div>
    </div>
  );
}
