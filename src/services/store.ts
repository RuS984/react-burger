import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';


import { rootReducer } from "./reducers";

//export type RootState = ReturnType<typeof rootReducer>

// export const store = configureStore({
//   reducer: {
//     ingredients: ingredientsReducer,
//     constructorIngredients: constructorIngredientsReducer,
//     order: orderReducer,
//     user: userReducer,
//   },
// });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    //.concat(wsMiddleware)
  }
})





















