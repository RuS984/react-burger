import { Params } from "react-router-dom";
import { TBurgerIngredientsProps } from "./Types/ingredientsTypes";
import { useSelector } from "./Types/reduxThunkTypes";


export const GetIngredientById = ( id : string | undefined): TBurgerIngredientsProps | undefined => {
  const burgerIngredients = useSelector((state) => state.ingredients.data);
  return burgerIngredients.find((item) => item._id === id);
};
