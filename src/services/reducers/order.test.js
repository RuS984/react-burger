import {
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS,
    SUBMIT_ORDER_FAILED,
} from "../actions/order";
import { orderReducer, initialState } from "./order";


describe('orderReducer test', () => {
    it('should get initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should SUBMIT_ORDER_REQUEST', () => {
        expect(
            orderReducer(undefined, {
            type: SUBMIT_ORDER_REQUEST,
            })
        ).toEqual({...initialState, 
            isProceed: true,
            "orderNumber": 0,
        })
    })

    it('should SUBMIT_ORDER_SUCCESS', () => {
        const testdata ={
            "error": "",
            "isError": false,
            "isProceed": false,
            "orderNumber": 0,
        };

    expect(
        orderReducer(undefined, {
            type: SUBMIT_ORDER_SUCCESS,
            payload: {name: "name", order: 0}
        })
        ).toEqual({...initialState,
            ...testdata,
            })
    })

    it('should GET_INGREDIENTS_FAILED', () => {
        expect(
            orderReducer(undefined, {
                type: SUBMIT_ORDER_FAILED,
                payload: {  error: "error" }})
        )
        .toEqual({...initialState,
            isError: true,
            error: "error",
        })
    })

})
