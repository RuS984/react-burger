import { WS_CONNECTION_START_USER, WS_CONNECTION_SUCCESS_USER, 
    WS_CONNECTION_ERROR_USER, WS_CONNECTION_CLOSED_USER, WS_GET_MESSAGE_USER } from "../actions/ordersFeedUser"
import { WsOrdersFeedUserReducer, initialState } from "./ordersFeedUser";

describe('websocketreducer test', () => {
    it('should get initial state', () => {
        expect(WsOrdersFeedUserReducer(undefined, {})).toEqual(initialState)
    })

    it('should WS_CONNECTION_START', () => {
        expect(
            WsOrdersFeedUserReducer(undefined, {
                type: WS_CONNECTION_START_USER,
    })
    ).toEqual(initialState)
    })

    it('should WS_CONNECTION_SUCCESS', () => {
        expect(
            WsOrdersFeedUserReducer(undefined, {type: WS_CONNECTION_SUCCESS_USER,}))
            .toEqual({...initialState,
                WebSocketConnected: true,
        })
    })

    it('should WS_CONNECTION_ERROR', () => {
    expect(
        WsOrdersFeedUserReducer(undefined, {
            type: WS_CONNECTION_ERROR_USER,
        })
        ).toEqual(initialState)
    })

    it('should WS_CONNECTION_CLOSED', () => {
        expect(
            WsOrdersFeedUserReducer(undefined, {type: WS_CONNECTION_CLOSED_USER,}))
            .toEqual(initialState)
    })

    it('should WS_GET_MESSAGE', () => {
    const testdata = {
        orders: 'array',
        total: 'number',
        totalToday: 'number',}
    expect(
        WsOrdersFeedUserReducer(undefined, {
                type: WS_GET_MESSAGE_USER,
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