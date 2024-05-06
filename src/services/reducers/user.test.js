import {
    SET_USER_REQUEST,
    SET_USER_SUCCESS,
    SET_USER_FAILED,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILED,
    SIGNOUT_USER_REQUEST,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER_FAILED,
} from "../actions/user";
import { userReducer, initialState } from "./user";

describe('orderReducer SET_USER test', () => {
    it('should get initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should SET_USER_REQUEST', () => {
        expect(
            userReducer(undefined, {
            type: SET_USER_REQUEST,
            })
        ).toEqual({...initialState, 
            isProceed: true,
        })
    })

    it('should SET_USER_SUCCESS', () => {
        const testdata ={
            user: {email: "testEmail",
                name: "testName"}
        };

    expect(
        userReducer(undefined, {
            type: SET_USER_SUCCESS,
            payload: testdata
        })
        ).toEqual({...initialState,
            ...testdata,
            })
    })

    it('should SET_USER_FAILED', () => {
        expect(
            userReducer(undefined, {
                type: SET_USER_FAILED,
                payload: {  error: "error" }})
        )
        .toEqual({...initialState,
            isError: true,
            error: "error",
        })
    })
})

describe('orderReducer REGISTER_USER test', () => {
    it('should get initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should REGISTER_USER_REQUEST', () => {
        expect(
            userReducer(undefined, {
            type: REGISTER_USER_REQUEST,
            })
        ).toEqual({...initialState, 
            isProceed: true,
        })
    })

    it('should REGISTER_USER_SUCCESS', () => {
        const testDataRequest ={
            user: {
                email: "testEmail",
                name: "testName",
                password: "testPassword"
            }
        };
        
    expect(
        userReducer(undefined, {
            type: REGISTER_USER_SUCCESS,
            payload: testDataRequest
        })
        ).toEqual({...initialState,
            isProceed: false,
            isError: false
            })
    })

    it('should REGISTER_USER_FAILED', () => {
        expect(
            userReducer(undefined, {
                type: REGISTER_USER_FAILED,
                payload: {  error: "error" }})
        )
        .toEqual({...initialState,
            isError: true,
            error: "error",
        })
    })
})

describe('orderReducer SIGNIN_USER test', () => {
    it('should get initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should SIGNIN_USER_REQUEST', () => {
        expect(
            userReducer(undefined, {
            type: SIGNIN_USER_REQUEST,
            })
        ).toEqual({...initialState, 
            isProceed: true,
        })
    })

    it('should SIGNIN_USER_SUCCESS', () => {
        const testdata ={...initialState,
            user: undefined,
            isChecked: false,
            success: false,
            isProceed: false,
            isError: false,
            error: ""
        };

    expect(
        userReducer(undefined, {
            type: SIGNIN_USER_SUCCESS,
            payload: testdata
        })
        ).toEqual({...initialState,
            ...testdata,
            })
    })

    it('should SIGNIN_USER_FAILED', () => {
        expect(
            userReducer(undefined, {
                type: SIGNIN_USER_FAILED,
                payload: {  error: "error" }})
        )
        .toEqual({...initialState,
            isError: true,
            error: "error",
        })
    })
})

describe('orderReducer SIGNOUT_USER test', () => {
    it('should get initial state', () => {
    expect(userReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should SIGNOUT_USER_REQUEST', () => {
        expect(
            userReducer(undefined, {
            type: SIGNOUT_USER_REQUEST,
            })
        ).toEqual({...initialState, 
            isProceed: true,
        })
    })

    it('should SIGNOUT_USER_SUCCESS', () => {
        const testdata ={...initialState,
            user: undefined,
            isChecked: false,
            success: false,
            isProceed: false,
            isError: false,
            error: ""
        };

    expect(
        userReducer(undefined, {
            type: SIGNOUT_USER_SUCCESS,
            payload: testdata
        })
        ).toEqual({...initialState,
            ...testdata,
            })
    })

    it('should SIGNOUT_USER_FAILED', () => {
        expect(
            userReducer(undefined, {
                type: SIGNOUT_USER_FAILED,
                payload: {  error: "error" }})
        )
        .toEqual({...initialState,
            isError: true,
            error: "error",
        })
    })
})


