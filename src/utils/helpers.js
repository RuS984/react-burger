import { useSelector } from "react-redux";

export const GetIngredientById = ({ id }) => {
  const burgerIngredients = useSelector((state) => state.ingredients.data);
  return burgerIngredients.find((item) => item._id === id);
};
