import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";
import { ingredientsReducer, initialState } from "./ingredients";

describe('ingredientsreducer test', () => {
    it('should get initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should GET_INGREDIENTS_REQUEST', () => {
        expect(
            ingredientsReducer(undefined, {
            type: GET_INGREDIENTS_REQUEST,
                payload: true,
            })
        ).toEqual({...initialState, 
            isLoading: true,
        })
    })

    it('should GET_INGREDIENTS_SUCCESS', () => {
        const testdata = [{
            _id: 'string',
            name: 'string',
            type: 'string',
            proteins: 'number',
            fat: 'number',
            carbohydrates: 'number',
            calories: 'number',
            price: 'number',
            image: 'string',
            image_mobile: 'string',
            image_large: 'string',
            __v: 'number',}];

    expect(
        ingredientsReducer(undefined, {
            type: GET_INGREDIENTS_SUCCESS,
            payload: testdata,})
        ).toEqual({...initialState,
            isLoading: false,
            data: testdata,
            })
    })

    it('should GET_INGREDIENTS_FAILED', () => {
        expect(
            ingredientsReducer(undefined, {
                type: GET_INGREDIENTS_FAILED,})
        )

        .toEqual({...initialState,
            hasError: true,
        })
    })
})
