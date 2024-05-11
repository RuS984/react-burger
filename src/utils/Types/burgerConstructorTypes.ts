import { DRAG_INGREDIENT_IN_CONSTRUCTOR, DRAG_BUN_IN_CONSTRUCTOR, SORT_INGREDIENT_IN_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR } from "../../services/actions/burgerConstructor";
import { TBurgerIngredientsProps } from "./ingredientsTypes";




export type TBurgerConstructorElementProps = {
  type: "top" | "bottom" | undefined,
  isLocked: boolean,
  text: string,
  price: number,
  thumbnail: string,
  idx: number
  ingredient: TBurgerIngredientsProps,
  handleClose: () => void;
};

export type TBurgerIngredientProps = {
  ingredient: TBurgerIngredientsProps;
  dataTestid: string;
  handleClick: () => void;
};
  
export type TBurgerIngredientParams = {
    ingredientsWithoutBuns: TBurgerIngredientsProps[];
    buns: TBurgerIngredientsProps;
  };

export type TDragSortIngredient = {
  type: typeof SORT_INGREDIENT_IN_CONSTRUCTOR;
  payload: TBurgerIngredientsProps[];
}

export type TDeleteIngredient = {
    type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR;
    payload: TBurgerIngredientsProps;
  }

export type TDragIngredientAction = {
    type: typeof DRAG_INGREDIENT_IN_CONSTRUCTOR;
    payload: {ingredient:TBurgerIngredientsProps, itemId: string   };
  }
  
export type TDragBunAction = {
    type: typeof DRAG_BUN_IN_CONSTRUCTOR;
    payload: {ingredient:TBurgerIngredientsProps, itemId: string   };
  }

export type TBurgerConstructorActions =
| TDragIngredientAction
| TDragBunAction
| TDragSortIngredient
| TDeleteIngredient;

