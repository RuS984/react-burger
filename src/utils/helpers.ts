import { useSelector } from "react-redux";
import TBurgerIngredientsProps from "../components/BurgerIngredients/TBurgerIngredientsProps";

type TIngredientIdProps = {
  id: string;
};

export const GetIngredientById = ({ id }: TIngredientIdProps): TBurgerIngredientsProps => {
  //@ts-ignore
  const burgerIngredients = useSelector((state) => state.ingredients.data);
  return burgerIngredients.find((item: TBurgerIngredientsProps) => item._id === id);
};
