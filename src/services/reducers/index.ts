import { combineReducers } from 'redux';
import { constructorIngredientsReducer } from './burgerConstructor';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { userReducer } from './user';



export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorIngredients: constructorIngredientsReducer,
  order: orderReducer,
  user: userReducer,
});

