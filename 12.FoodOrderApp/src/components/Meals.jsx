import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [fetchData, setfetchData] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(`http://localhost:3000/meals`);
    if (!response.ok) {
      throw Error("Fetch Failed");
    }
    const resData = await response.json();
    setfetchData(resData);
  };

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <>
      <ul id="meals">
        {fetchData.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
};

export default Meals;
