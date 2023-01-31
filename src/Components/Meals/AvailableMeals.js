import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: 1,
      name: "khawsa",
      description:
        "Khavsa is the famous item in surat, This item born from Berma. In berma khavsa called as Khavu-swe",
      price: 35,
    },
    {
      id: 2,
      name: "Ghari",
      description:
        "Ghari is the one of the famous trademark sweet of the surat",
      price: 600 + " / 1 k.g",
    },
    {
      id: 3,
      name: "Aloo-Puri",
      description: "Aloo-puri is the gujarati famous snack",
      price: 30,
    },
    {
      id: 4,
      name: "7 cheese pizza",
      description: "7 cheese piza is our restorant's one of the famous item",
      price: 700 + " / Medium size",
    },
  ];

  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{meals}</Card>
      </ul>
    </section>
  );
};

export default AvailableMeals;
