import { TWSOrdersFeedConnectionClosedAction, TWSOrdersFeedRootActions } from "../../utils/Types/ordersFeedTypes";
import { API_ORDERS_FEED } from "../../utils/appWebSockets";


export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

export const WSOrdersFeedRootActions: TWSOrdersFeedRootActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
};

export const WSStart = () => ({
    type: WS_CONNECTION_START,
    payload: API_ORDERS_FEED,
});

export const WSClose = ():TWSOrdersFeedConnectionClosedAction => ({
    type: WS_CONNECTION_CLOSED
})
