import { SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_FAILED, 
         REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, 
         SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILED, 
         SIGNOUT_USER_REQUEST, SIGNOUT_USER_SUCCESS, SIGNOUT_USER_FAILED, 
         UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, 
         RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, 
         IS_CHECKED_REQUEST, IS_CHECKED_SUCCESS, 
         IS_SUCCESS_REQUEST, IS_SUCCESS_SUCCESS, IS_SUCCESS_FAILED 
} from "../../services/actions/user";

export type TUser = {
  email: string;
  name: string;
  password?: string;
};

export type TSetUserRequestAction = {
  type: typeof SET_USER_REQUEST;
}

export type TSetUserSuccessAction = {
  type: typeof SET_USER_SUCCESS;
  payload: {user:TUser};
}

export type TSetUserFailedAction = {
  type: typeof SET_USER_FAILED;
  payload: {error:string};
}

export type TRegisterUserRequestAction = {
  type: typeof REGISTER_USER_REQUEST;
  payload: {};
}

export type TRegisterUserSuccessAction = {
  type: typeof REGISTER_USER_SUCCESS;
  payload: {};
}

export type TRegisterUserFailedAction = {
  type: typeof REGISTER_USER_FAILED;
  payload: {error:string};
}

export type TSignInUserRequestAction = {
  type: typeof SIGNIN_USER_REQUEST;
  payload: {};
}

export type TSignInUserSuccessAction = {
  type: typeof SIGNIN_USER_SUCCESS;
  payload: {};
}

export type TSignInUserFailedAction = {
  type: typeof SIGNIN_USER_FAILED;
  payload: {error:string};
}

export type TSignOutUserRequestAction = {
  type: typeof SIGNOUT_USER_REQUEST;
  payload: {};
}

export type TSignOutUserSuccessAction = {
  type: typeof SIGNOUT_USER_SUCCESS;
  payload: {};
}

export type TSignOutUserFailedAction = {
  type: typeof SIGNOUT_USER_FAILED;
  payload: {error:string};
}

export type TUpdateUserRequestAction = {
  type: typeof UPDATE_USER_REQUEST;
  payload: {};
}

export type TUpdateUserSuccessAction = {
  type: typeof UPDATE_USER_SUCCESS;
  payload: {};
}

export type TUpdateUserFailedAction = {
  type: typeof UPDATE_USER_FAILED;
  payload: {};
}

export type TResetPasswordRequestAction = {
  type: typeof RESET_PASSWORD_REQUEST;
  payload: {};
}

export type TResetPasswordSuccessAction = {
  type: typeof RESET_PASSWORD_SUCCESS;
  payload: {};
}

export type TResetPasswordFailedAction = {
  type: typeof RESET_PASSWORD_FAILED;
  payload: {};
}

export type TIsCheckedRequestAction = {
  type: typeof IS_CHECKED_REQUEST;
  payload: {};
}

export type TIsCheckedSuccessAction = {
  type: typeof IS_CHECKED_SUCCESS;
  payload: {};
}

export type TIsCheckedFailedAction = {
  type: typeof RESET_PASSWORD_FAILED;
  payload: {};
}

export type TIsSuccessRequestAction = {
  type: typeof IS_SUCCESS_REQUEST;
  payload: {};
}

export type TIsSuccessSuccessAction = {
  type: typeof IS_SUCCESS_SUCCESS;
  payload: {};
}

export type TIsSuccessFailedAction = {
  type: typeof IS_SUCCESS_FAILED;
  payload: {};
}
export type TUserActions =
| TSetUserRequestAction
| TSetUserSuccessAction
| TSetUserFailedAction
| TRegisterUserRequestAction
| TRegisterUserSuccessAction
| TRegisterUserFailedAction
| TSignInUserRequestAction
| TSignInUserSuccessAction
| TSignInUserFailedAction
| TSignOutUserRequestAction
| TSignOutUserSuccessAction
| TSignOutUserFailedAction
| TUpdateUserRequestAction
| TUpdateUserSuccessAction
| TUpdateUserFailedAction
| TResetPasswordRequestAction
| TResetPasswordSuccessAction
| TResetPasswordFailedAction
| TIsCheckedRequestAction
| TIsCheckedSuccessAction
| TIsCheckedFailedAction
| TIsSuccessRequestAction
| TIsSuccessSuccessAction
| TIsSuccessFailedAction;






















