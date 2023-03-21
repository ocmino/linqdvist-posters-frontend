import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_POSTERS = [
  {
    id: "1",
    name: "Sunrise by Ocean",
    description: "Poster created in Blender",
    price: 399,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/stad-i-ljus-1_360x.jpg?v=1533906540",
  },
  {
    id: "2",
    name: "Dystopian Christmas",
    description: "Poster created in Blender",
    price: 399,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/vinterns-magi-1_360x.jpg?v=1568752238",
  },
  {
    id: "3",
    name: "Design Lamps",
    description: "Poster created in Blender",
    price: 249,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/the-mountain-1_360x.jpg?v=1541006626",
  },
    {   
    id: "4",
    name: "Imagination",
    description: "Poster created in Blender",
    price: 249,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/imagination-loa-1_360x.jpg?v=1574715772",
    },
    {
    id: "5",
    name: "Dalahäst",
    description: "Poster created in Blender",
    price: 399,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/dalahast-if-1_360x.jpg?v=1564661546",
  },
  {
    id: "6",  
    name: "City life",
    description: "Poster created in Blender",
    price: 399,
    url: "https://cdn.shopify.com/s/files/1/2469/4477/products/city-life-1_360x.jpg?v=1560613537",
  },

];

//alert on click
const alert = () => {
  alert("You clicked me!");
};

const AvailableMeals = () => {
  const postersList = DUMMY_POSTERS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      url={meal.url}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>
        {postersList}
      </ul>
    </section>
  );
};

export default AvailableMeals;