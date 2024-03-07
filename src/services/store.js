import {configureStore} from '@reduxjs/toolkit'
import { ingredientsReducer } from "./reducers/ingredients"
import { constructorIngredientsReducer } from "./reducers/burgerConstructor"

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constructorIngredients: constructorIngredientsReducer
  }
}
);