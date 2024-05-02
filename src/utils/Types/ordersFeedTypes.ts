import { WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE } from "../../services/actions/ordersFeed";
   
export type TOrdersFeedProps = {
     ingredients: string[];
     number: number;
     name: string;
     status: string;
     createdAt: string 
     _id: string;
     price: number;
     updatedAt: string;
 }

type TWSOrdersFeedConnectionStartAction = {
  type: typeof WS_CONNECTION_START;
  payload: string;
};

export type TWSOrdersFeedConnectionSuccessAction = {
     type: typeof WS_CONNECTION_SUCCESS};

export type TWSOrdersFeedConnectionErrorAction = {
     type: typeof WS_CONNECTION_ERROR;
     payload: Event};

export type TWSOrdersFeedConnectionClosedAction = {
     type: typeof WS_CONNECTION_CLOSED};

export type TWSOrdersFeedGetMessageAction = {
     type: typeof WS_GET_MESSAGE;
     orders: TOrdersFeedProps[];
     total: number;
     totalToday: number};

export type TWSOrdersFeedActions = | TWSOrdersFeedConnectionStartAction | TWSOrdersFeedConnectionSuccessAction 
| TWSOrdersFeedConnectionErrorAction | TWSOrdersFeedConnectionClosedAction | TWSOrdersFeedGetMessageAction ;

export type TWSOrdersFeedRootActions = {
     wsInit: typeof WS_CONNECTION_START,
     onOpen: typeof WS_CONNECTION_SUCCESS,
     onClose: typeof WS_CONNECTION_CLOSED,
     onError: typeof WS_CONNECTION_ERROR,
     onMessage: typeof WS_GET_MESSAGE,
};

