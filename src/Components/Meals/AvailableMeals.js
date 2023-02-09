import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);

  useEffect( () => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-da825-default-rtdb.firebaseio.com/Meals.json"
      );
      const responseData = await response.json();

      const loadedData = [];
        
      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          desc: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMealsData(loadedData);
    };
    fetchMeals();
  }, []);

  const meals = mealsData.map((meal) => (
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
