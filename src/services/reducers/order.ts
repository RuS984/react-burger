import { TSubmitOrderActions, TSubmitOrderParams } from "../../utils/Types/orderTypes";
import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_FAILED,
} from "../actions/order";

export const initialState: TSubmitOrderParams = {
  orderNumber: 0,
  isProceed: false,
  isError: false,
  error: "",
};

export const orderReducer = (state = initialState, action: TSubmitOrderActions) => {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProceed: true,
      };
    }
    case SUBMIT_ORDER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProceed: false,
        orderNumber: action.payload.order,
      };
    }
    case SUBMIT_ORDER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.payload.error,
      };
    }
    default:
      return { ...state };
  }
};
