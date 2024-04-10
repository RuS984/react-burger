import { useSelector } from "react-redux";
import TBurgerIngredientsProps from "../components/BurgerIngredients/TBurgerIngredientsProps";

export const GetIngredientById = ({ id }) => {
  //@ts-ignore
  const burgerIngredients = useSelector((state) => state.ingredients.data);
  return burgerIngredients.find((item) => item._id === id);
};
