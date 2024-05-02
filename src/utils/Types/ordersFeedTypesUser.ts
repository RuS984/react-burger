import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_ERROR_USER, WS_CONNECTION_START_USER, WS_CONNECTION_SUCCESS_USER, WS_GET_MESSAGE_USER } from "../../services/actions/ordersFeedUser";

export type TOrdersFeedUserPropsUser = {
     ingredients: string[];
     number: number;
     name: string;
     status: string;
     createdAt: string 
     _id: string;
     price: number;
     updatedAt: string;
 }

export type TWSOrdersFeedConnectionStartActionUser = {
  type: typeof WS_CONNECTION_START_USER;
  payload: string;
};

export type TWSOrdersFeedConnectionSuccessActionUser = {
     type: typeof WS_CONNECTION_SUCCESS_USER};

export type TWSOrdersFeedConnectionErrorActionUser = {
     type: typeof WS_CONNECTION_ERROR_USER;
     payload: Event
};

export type TWSOrdersFeedConnectionClosedActionUser = {
     type: typeof WS_CONNECTION_CLOSED_USER};

export type TWSOrdersFeedGetMessageActionUser = {
     type: typeof WS_GET_MESSAGE_USER;
     orders: TOrdersFeedUserPropsUser[];
     total: number;
     totalToday: number};

export type TWSOrdersFeedActionsUser = | TWSOrdersFeedConnectionStartActionUser | TWSOrdersFeedConnectionSuccessActionUser 
| TWSOrdersFeedConnectionErrorActionUser | TWSOrdersFeedConnectionClosedActionUser | TWSOrdersFeedGetMessageActionUser ;

export type TWSOrdersFeedRootActionsUser = {
     wsInit: typeof WS_CONNECTION_START_USER,
     onOpen: typeof WS_CONNECTION_SUCCESS_USER,
     onClose: typeof WS_CONNECTION_CLOSED_USER,
     onError: typeof WS_CONNECTION_ERROR_USER,
     onMessage: typeof WS_GET_MESSAGE_USER,
};

