export default function Home() {
  const background = "./Pictures/HomePage.jpeg";

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
    top: "69vh",
    left: "33%",
    transform: "translate(-50%, -50%)",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "color 2s linear",
    padding: "20px",
    width: "65%",
    height: "50%",
  };

  const posters = {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "50px",
    top: "235%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const selectedPosters = {
    position: "absolute",
    top: "170%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    
  };

  return (
    <div style={style}>
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
