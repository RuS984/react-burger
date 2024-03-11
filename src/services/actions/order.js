import { submitOrderRequest } from "../../utils/appApi.js";

export const SUBMIT_ORDER_REQUEST = "SUBMIT_ORDER_REQUEST";
export const SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS";
export const SUBMIT_ORDER_FAILED = "SUBMIT_ORDER_FAILED";

export const submitOrder = (orderData) => (dispatch) => {
  dispatch({
    type: SUBMIT_ORDER_REQUEST,
  });
  submitOrderRequest(orderData)
    .then((res) => {
      dispatch({
        type: SUBMIT_ORDER_SUCCESS,
        name: res.name,
        order: res.order.number,
      });
    })
    .catch((error) => {
      dispatch({ type: SUBMIT_ORDER_FAILED, error: error });
    });
};
