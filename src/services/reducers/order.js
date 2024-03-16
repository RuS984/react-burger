import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
} from "../actions/order";

const initialState = {
  orderNumber: 0,
  isProcceed: false,
  isError: false,
  error: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProcceed: true,
      };
    }
    case SUBMIT_ORDER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProcceed: false,
        orderNumber: action.order,
      };
    }
    case SUBMIT_ORDER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProcceed: false,
        isError: true,
        error: action.error,
      };
    }
    default:
      return { ...state };
  }
};
