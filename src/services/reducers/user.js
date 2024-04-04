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

const initialState = {
  user: null,
  isChecked: false,
  success: false,
  isProceed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REQUEST: {
      console.log("req", state);
      return {
        isProceed: true,
      };
    }
    case SET_USER_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        isProceed: false,
        user: action.user,
      };
    }
    case SET_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.error,
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
        error: action.error,
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
        error: action.error,
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
        user: null,
        isProceed: false,
      };
    }
    case SIGNOUT_USER_FAILED: {
      console.log("fail", state);
      return {
        ...state,
        isProceed: false,
        isError: true,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
