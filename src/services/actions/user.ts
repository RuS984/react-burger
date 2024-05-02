import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../utils/Types/reduxThunkTypes";
import { fetchWithRefresh, apiUrl } from "../../utils/appApi";

export const  SET_USER_REQUEST:"SET_USER_REQUEST" = "SET_USER_REQUEST";
export const  SET_USER_SUCCESS:"SET_USER_SUCCESS" = "SET_USER_SUCCESS";
export const  SET_USER_FAILED:"SET_USER_FAILED" = "SET_USER_FAILED";

export const  REGISTER_USER_REQUEST: "REGISTER_USER_REQUEST" = "REGISTER_USER_REQUEST";
export const  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS" = "REGISTER_USER_SUCCESS";
export const  REGISTER_USER_FAILED: "REGISTER_USER_FAILED" = "REGISTER_USER_FAILED";

export const  SIGNIN_USER_REQUEST: "SIGNIN_USER_REQUEST" = "SIGNIN_USER_REQUEST";
export const  SIGNIN_USER_SUCCESS: "SIGNIN_USER_SUCCESS" = "SIGNIN_USER_SUCCESS";
export const  SIGNIN_USER_FAILED: "SIGNIN_USER_FAILED" = "SIGNIN_USER_FAILED";

export const  SIGNOUT_USER_REQUEST: "SIGNOUT_USER_REQUEST" = "SIGNOUT_USER_REQUEST";
export const  SIGNOUT_USER_SUCCESS: "SIGNOUT_USER_SUCCESS" = "SIGNOUT_USER_SUCCESS";
export const  SIGNOUT_USER_FAILED: "SIGNOUT_USER_FAILED" = "SIGNOUT_USER_FAILED";

export const  UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const  UPDATE_USER_FAILED: "UPDATE_USER_FAILED" = "UPDATE_USER_FAILED";

export const  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const  RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED";

export const  IS_CHECKED_REQUEST: "IS_CHECKED_REQUEST" = "IS_CHECKED_REQUEST";
export const  IS_CHECKED_SUCCESS: "IS_CHECKED_SUCCESS" = "IS_CHECKED_SUCCESS";
export const  IS_CHECKED_FAILED: "IS_CHECKED_FAILED" = "IS_CHECKED_FAILED";

export const IS_SUCCESS_REQUEST:'IS_SUCCESS_REQUEST' = 'IS_SUCCESS_REQUEST';
export const IS_SUCCESS_SUCCESS:'IS_SUCCESS_SUCCESS' = 'IS_SUCCESS_SUCCESS';
export const IS_SUCCESS_FAILED:'IS_SUCCESS_FAILED ' = 'IS_SUCCESS_FAILED ';



export const getUser = () => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: SET_USER_REQUEST
    });
      const responce = await fetchWithRefresh(`${apiUrl}/auth/user`, {
        method: 'GET',
        headers: { authorization: localStorage.getItem("accessToken") as string }          
      })
      .then((rsp) =>
        {
          dispatch(
            {
              type: SET_USER_SUCCESS,
              payload: { user: rsp.user }
            }
          ) 
        }

      )
      .catch((error) => {
        dispatch({ type: SET_USER_FAILED, payload:{ error: error} });
        return;
      });              
  }
}

export const registerUser = (email: string, password: string, name: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_USER_REQUEST,
      payload: {}
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, name}),
      })

      localStorage.setItem("accessToken", response.accessToken as string);
      localStorage.setItem("refreshToken", response.refreshToken as string);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          payload: { user: response.user }
        }
      );   
      
      dispatch(
        {
          type: REGISTER_USER_SUCCESS,
          payload: {}
        }
      );  
      
      const navigate = useNavigate();
      navigate("/", { replace: true });   
    }
    catch
    {
      dispatch(
        {
          type: REGISTER_USER_FAILED,
          payload: {error: "registerUser Error"}
        }
      );  
    }
    
  }
}

export const signInUser = (email: string, password: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: SIGNIN_USER_REQUEST,
      payload: {}
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      })

      localStorage.setItem("accessToken", response.accessToken as string);
      localStorage.setItem("refreshToken", response.refreshToken as string);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          payload: { user: response.user }
        }
      );   
      
      dispatch(
        {
          type: SIGNIN_USER_SUCCESS,
          payload: {}
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: SIGNIN_USER_FAILED,
          payload: {error: "signInUser Error"}
        }
      );  
    }
    
  }
}

export const signOutUser = () => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: SIGNOUT_USER_REQUEST,
      payload: {}
    });
    if (localStorage.getItem('refreshToken')) {
      try
      {
        const response = await fetchWithRefresh(`${apiUrl}/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({token: localStorage.getItem("refreshToken")}),           
        });  

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        
        dispatch(
          {
            type: SIGNOUT_USER_SUCCESS,
            payload: {}
          }
        );     
      }
      catch
      {
        dispatch(
          {
            type: SIGNOUT_USER_FAILED,
            payload: {error: "signOutUser Error"}
          }
        );  
      }
    }
  }
};

export const updateUser = (name: string, email: string, password: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
      payload: {}
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/user`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json;charset=utf-8', authorization: localStorage.getItem("accessToken")  as string,},
        body: JSON.stringify({ name, email, password, }),
      });  

      localStorage.setItem("accessToken", response.accessToken as string);
      localStorage.setItem("refreshToken", response.refreshToken as string);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          payload: { user: response.user }
        }
      );   
      
      dispatch(
        {
          type: UPDATE_USER_SUCCESS,
          payload: {}
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: UPDATE_USER_FAILED,
          payload: {error: "updateUser Error"}
        }
      );  
    }
    
  }
}

export const forgotPassword = (email: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
      payload: {}
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });  

      dispatch(
        {
          type: RESET_PASSWORD_SUCCESS,
          payload: {}
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: RESET_PASSWORD_FAILED,
          payload: {error: "forgotPassword Error"}
        }
      );  
    }
    
  }
}

export const resetPassword = (password: string, token: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
      payload: {}
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/password-reset/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({password, token}),
      });  

      dispatch(
        {
          type: RESET_PASSWORD_SUCCESS,
          payload: {}
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: RESET_PASSWORD_FAILED,
          payload: {error: "resetPassword Error"}
        }
      );  
    }
    
  }
}





















