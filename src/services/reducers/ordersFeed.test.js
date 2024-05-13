import { WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE } from "../actions/ordersFeed"
import { WsOrdersFeedReducer, initialState } from "./ordersFeed";

describe('websocketreducer test', () => {
    it('should get initial state', () => {
        expect(WsOrdersFeedReducer(undefined, {})).toEqual(initialState)
    })

    it('should WS_CONNECTION_START', () => {
        expect(
            WsOrdersFeedReducer(undefined, {
                type: WS_CONNECTION_START,
    })
    ).toEqual(initialState)
    })

    it('should WS_CONNECTION_SUCCESS', () => {
        expect(
            WsOrdersFeedReducer(undefined, {type: WS_CONNECTION_SUCCESS,}))
            .toEqual({...initialState,
                WebSocketConnected: true,
        })
    })

    it('should WS_CONNECTION_ERROR', () => {
    expect(
        WsOrdersFeedReducer(undefined, {
            type: WS_CONNECTION_ERROR,
        })
        ).toEqual(initialState)
    })

    it('should WS_CONNECTION_CLOSED', () => {
        expect(
            WsOrdersFeedReducer(undefined, {type: WS_CONNECTION_CLOSED,}))
            .toEqual(initialState)
    })

    it('should WS_GET_MESSAGE', () => {
    const testdata = {
        orders: 'array',
        total: 'number',
        totalToday: 'number',}
    expect(
        WsOrdersFeedReducer(undefined, {
                type: WS_GET_MESSAGE,
                orders: testdata.orders,
                total: testdata.total,
                totalToday: testdata.totalToday,
            })
        ).toEqual({
            WebSocketConnected: false,
            orders: testdata.orders,
            total: testdata.total,
            totalToday: testdata.totalToday,
        })
    })
})