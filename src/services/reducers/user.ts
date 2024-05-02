import { TUser, TUserActions } from "../../utils/Types/userTypes";
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



export type TUserParams = {
  user?: TUser,
  isChecked: boolean,
  success: boolean,
  isProceed: boolean,
  isError: boolean,
  error: string
};

const initialState: TUserParams = {
  user: undefined,
  isChecked: false,
  success: false,
  isProceed: false,
  isError: false,
  error: ""
};

export const userReducer = (state = initialState, action:TUserActions) => {
  switch (action.type) {
    case SET_USER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProceed: true,
      };
    }
    case SET_USER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProceed: false,
        isError: false,
        user: action.payload.user,
      };
    }
    case SET_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.payload.error,
      };
    }

    case REGISTER_USER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProceed: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProceed: false,
      };
    }
    case REGISTER_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.payload.error,
      };
    }

    case SIGNIN_USER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProceed: true,
      };
    }
    case SIGNIN_USER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProceed: false,
      };
    }
    case SIGNIN_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.payload.error,
      };
    }

    case SIGNOUT_USER_REQUEST: {
      console.log("req", state);
      return {
        ...state,
        isProceed: true,
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        user: undefined,
        isProceed: false,
      };
    }
    case SIGNOUT_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
