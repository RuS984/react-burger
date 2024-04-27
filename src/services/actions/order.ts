import { TBurgerIngredientsProps } from "../../utils/Types/ingredientsTypes";
import { TSubmitOrderParams } from "../../utils/Types/orderTypes";
import { TOrdersFeedProps } from "../../utils/Types/ordersFeedTypes";
import { AppDispatch } from "../../utils/Types/reduxThunkTypes";
import { submitOrderRequest } from "../../utils/appApi";

export const SUBMIT_ORDER_REQUEST: "SUBMIT_ORDER_REQUEST" = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS: "SUBMIT_ORDER_SUCCESS" = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAILED : "SUBMIT_ORDER_FAILED" = "SUBMIT_ORDER_FAILED";

export const submitOrder = (orderData: TBurgerIngredientsProps[] ) => (dispatch: AppDispatch) => {
  dispatch({
    type: SUBMIT_ORDER_REQUEST,
  });
  submitOrderRequest(orderData)
    .then((res : { name: string; order: {number: number;}}) => {
      dispatch({
        type: SUBMIT_ORDER_SUCCESS,
        payload: {name: res.name, order: res.order.number},
      });
    })
    .catch((error) => {
      dispatch({ type: SUBMIT_ORDER_FAILED, payload: {  error: error } });
    });
};
