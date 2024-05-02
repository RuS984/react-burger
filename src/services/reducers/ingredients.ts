import { TIngredientsAction, TIngredientsProps } from "../../utils/Types/ingredientsTypes";
import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

const initialState: TIngredientsProps = {
  isLoading: false,
  hasError: false,
  data: [],
};

export const ingredientsReducer = (state = initialState, action: TIngredientsAction) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, isLoading: true, hasError: false };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_INGREDIENTS_FAILED:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
