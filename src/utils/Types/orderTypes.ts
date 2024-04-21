import { SUBMIT_ORDER_FAILED, SUBMIT_ORDER_REQUEST, SUBMIT_ORDER_SUCCESS } from "../../services/actions/order";

export type TOrderParams = {
  orderNumber: number;
  isProceed: boolean;
  isError: boolean;
  error: string;
};

export type TSubmitOrderParams = {
  orderNumber: number,
  isProceed: boolean,
  isError: boolean,
  error: string,
};

export type TSubmitOrderRequestAction = {
  type: typeof SUBMIT_ORDER_REQUEST;
}

export type TSubmitOrderSuccessAction = {
  type: typeof SUBMIT_ORDER_SUCCESS;
  payload: { name: string; order: number;};
}

export type TSubmitOrderFailedAction = {
  type: typeof SUBMIT_ORDER_FAILED;
  payload: { error: string; }
}

export type TSubmitOrderActions =
| TSubmitOrderRequestAction
| TSubmitOrderSuccessAction
| TSubmitOrderFailedAction;