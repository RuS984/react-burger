import { v4 as uuidv4 } from 'uuid';

export const DRAG_INGREDIENT_IN_CONSTRUCTOR = "DRAG_INGREDIENT_IN_CONSTRUCTOR";
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = "DELETE_INGREDIENT_FROM_CONSTRUCTOR";
export const DRAG_BUN_IN_CONSTRUCTOR = "DRAG_BUN_IN_CONSTRUCTOR";
export const SORT_INGREDIENT_IN_CONSTRUCTOR = "SORT_INGREDIENT_IN_CONSTRUCTOR";

export const dragIngredient = (ingredient) => ({
    type: DRAG_INGREDIENT_IN_CONSTRUCTOR,
    payload: {ingredient,
    itemId: uuidv4()
  }
  });

  export const dragBun = (ingredient) => ({
    type: DRAG_BUN_IN_CONSTRUCTOR,
    payload: {ingredient,
    itemId: uuidv4()
    }
  });

  export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    payload: ingredient
  });
