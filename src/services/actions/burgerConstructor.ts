import { v4 as uuidv4 } from "uuid";
import { TDragIngredientAction, TDragBunAction, 
         TDragSortIngredient, TDeleteIngredient } from "../../utils/Types/burgerConstructorTypes";
import { TBurgerIngredientsProps } from "../../utils/Types/ingredientsTypes";

export const DRAG_INGREDIENT_IN_CONSTRUCTOR: "DRAG_INGREDIENT_IN_CONSTRUCTOR" = "DRAG_INGREDIENT_IN_CONSTRUCTOR";
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR: "DELETE_INGREDIENT_FROM_CONSTRUCTOR" = "DELETE_INGREDIENT_FROM_CONSTRUCTOR";
export const DRAG_BUN_IN_CONSTRUCTOR: "DRAG_BUN_IN_CONSTRUCTOR" = "DRAG_BUN_IN_CONSTRUCTOR";
export const SORT_INGREDIENT_IN_CONSTRUCTOR: "SORT_INGREDIENT_IN_CONSTRUCTOR" = "SORT_INGREDIENT_IN_CONSTRUCTOR";

export const dragIngredient = (ingredient: TBurgerIngredientsProps):TDragIngredientAction => ({
  type: DRAG_INGREDIENT_IN_CONSTRUCTOR,
  payload: { ingredient, itemId: uuidv4() },
});

export const dragBun = (ingredient: TBurgerIngredientsProps):TDragBunAction => ({
  type: DRAG_BUN_IN_CONSTRUCTOR,
  payload: { ingredient, itemId: uuidv4() },
});

export const dragSortIngredient = (ingredients: TBurgerIngredientsProps[]): TDragSortIngredient => ({
  type: SORT_INGREDIENT_IN_CONSTRUCTOR,
  payload: ingredients,
});

export const deleteIngredient = (ingredient: TBurgerIngredientsProps): TDeleteIngredient => ({
  type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  payload: ingredient,
});


