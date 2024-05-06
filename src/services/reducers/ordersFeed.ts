import { TOrdersFeedProps, TWSOrdersFeedActions } from "../../utils/Types/ordersFeedTypes"
import { WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE } from "../actions/ordersFeed"


export type TWsOrderFeedState = {
    WebSocketConnected: boolean
    orders: TOrdersFeedProps[]
    total: number
    totalToday: number}

export const initialState: TWsOrderFeedState = {
    WebSocketConnected: false,
    orders: [],
    total: 0,
    totalToday: 0}

export const WsOrdersFeedReducer = (state = initialState, action: TWSOrdersFeedActions) => {
    switch (action.type) {
        case WS_CONNECTION_START:
            return {
                ...state,
            };

        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                WebSocketConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                WebSocketConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                WebSocketConnected: false,
                orders: [],
                total: 0,
                totalToday: 0,

            };

        case WS_GET_MESSAGE:
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