import { TWSOrdersFeedConnectionClosedActionUser, TWSOrdersFeedConnectionStartActionUser, TWSOrdersFeedRootActionsUser } from "../../utils/Types/ordersFeedTypesUser";
import { API_ORDERS_USER } from "../../utils/appWebSockets";


export const WS_CONNECTION_START_USER: 'WS_CONNECTION_START_USER' = 'WS_CONNECTION_START_USER';
export const WS_CONNECTION_SUCCESS_USER: 'WS_CONNECTION_SUCCESS_USER' = 'WS_CONNECTION_SUCCESS_USER';
export const WS_CONNECTION_ERROR_USER: 'WS_CONNECTION_ERROR_USER' = 'WS_CONNECTION_ERROR_USER';
export const WS_CONNECTION_CLOSED_USER: 'WS_CONNECTION_CLOSED_USER' = 'WS_CONNECTION_CLOSED_USER';
export const WS_GET_MESSAGE_USER: 'WS_GET_MESSAGE_USER' = 'WS_GET_MESSAGE_USER';

export const WSOrdersFeedRootActionsUser: TWSOrdersFeedRootActionsUser = {
    wsInit: WS_CONNECTION_START_USER,
    onOpen: WS_CONNECTION_SUCCESS_USER,
    onClose: WS_CONNECTION_CLOSED_USER,
    onError: WS_CONNECTION_ERROR_USER,
    onMessage: WS_GET_MESSAGE_USER
};
export const WSStartUser = (token: string): TWSOrdersFeedConnectionStartActionUser => ({
    type: WS_CONNECTION_START_USER,
    payload: `${API_ORDERS_USER}?token=${token}`
  });

export const WSCloseUser = ():TWSOrdersFeedConnectionClosedActionUser => ({
    type: WS_CONNECTION_CLOSED_USER
})
