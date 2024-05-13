import { TOrdersFeedUserPropsUser, TWSOrdersFeedActionsUser } from "../../utils/Types/ordersFeedTypesUser"
import { WS_CONNECTION_START_USER, WS_CONNECTION_SUCCESS_USER, WS_CONNECTION_ERROR_USER, WS_CONNECTION_CLOSED_USER, WS_GET_MESSAGE_USER } from '../actions/ordersFeedUser';


export type TWsOrderFeedUserState = {
    WebSocketConnected: boolean
    orders: TOrdersFeedUserPropsUser[]
    total: number
    totalToday: number
}

export const initialState: TWsOrderFeedUserState = {
    WebSocketConnected: false,
    orders: [],
    total: 0,
    totalToday: 0}

export const WsOrdersFeedUserReducer = (state = initialState, action: TWSOrdersFeedActionsUser) => {
    switch (action.type) {
        case WS_CONNECTION_START_USER:
            return {
                ...state,
            };

        case WS_CONNECTION_SUCCESS_USER:
            return {
                ...state,
                WebSocketConnected: true
            };

        case WS_CONNECTION_ERROR_USER:
            return {
                ...state,
                error: action.payload,
                WebSocketConnected: false
            };

        case WS_CONNECTION_CLOSED_USER:
            return {
                ...state,
                WebSocketConnected: false,
                orders: [],
                total: 0,
                totalToday: 0,

            };

        case WS_GET_MESSAGE_USER:
            return {
                ...state,
                orders: action.orders,
                total: action.total,
                totalToday: action.totalToday,
            };


        default:
            return state;
    }
};