import { getIngredientsRequest } from "../../utils/appApi";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const getIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsRequest()
      .then((data) =>
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          payload: data,
        })
      )
      .catch((e) => {
        dispatch({ type: GET_INGREDIENTS_FAILED });
        console.log(GET_INGREDIENTS_FAILED + "  error: " + e);
      });
  };
};
