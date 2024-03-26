import { fetchWithRefresh, apiUrl } from "../../utils/appApi.js";

export const  SET_USER_REQUEST = "SET_USER_REQUEST";
export const  SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const  SET_USER_FAILED  = "SET_USER_FAILED";

export const  REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const  REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const  REGISTER_USER_FAILED  = "REGISTER_USER_FAILED";

export const  SIGNIN_USER_REQUEST = "SIGNIN_USER_REQUEST";
export const  SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const  SIGNIN_USER_FAILED  = "SIGNIN_USER_FAILED";


export const  SIGNOUT_USER_REQUEST = "SIGNOUT_USER_REQUEST";
export const  SIGNOUT_USER_SUCCESS = "SIGNOUT_USER_SUCCESS";
export const  SIGNOUT_USER_FAILED  = "SIGNOUT_USER_FAILED";


export const  UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const  UPDATE_USER_FAILED  = "UPDATE_USER_FAILED";

export const  RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const  RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const  RESET_PASSWORD_FAILED  = "RESET_PASSWORD_FAILED";

export const  IS_CHECKED_REQUEST = "IS_CHECKED_REQUEST";
export const  IS_CHECKED_SUCCESS = "IS_CHECKED_SUCCESS";
export const  IS_CHECKED_FAILED  = "IS_CHECKED_FAILED";

export const IS_SUCCESS_REQUEST = 'IS_SUCCESS_REQUEST';
export const IS_SUCCESS_SUCCESS = 'IS_SUCCESS_SUCCESS';
export const IS_SUCCESS_FAILED  = 'IS_SUCCESS_FAILED ';



export const getUser = () => {
  return async function(dispatch) {
    dispatch({
      type: SET_USER_REQUEST,
    });
      const responce = await fetchWithRefresh(`${apiUrl}/auth/user`, {
        method: 'GET',
        headers: { authorization: localStorage.getItem("accessToken") }          
      })
      .then((rsp) =>
        {
          dispatch(
            {
              type: SET_USER_SUCCESS,
              user: rsp.user
            }
          ) 
        }

      )
      .catch((error) => {
        dispatch({ type: SET_USER_FAILED, error: error });
        return;
      });              
   
  }
}

export const registerUser = (email, password, name) => {
  return async function(dispatch) {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, name}),
      })

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          user: response.user
        }
      );   
      
      dispatch(
        {
          type: REGISTER_USER_SUCCESS,
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: REGISTER_USER_FAILED,
        }
      );  
    }
    
  }
}

export const signInUser = (email, password) => {
  return async function(dispatch) {
    dispatch({
      type: SIGNIN_USER_REQUEST,
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      })

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          user: response.user
        }
      );   
      
      dispatch(
        {
          type: SIGNIN_USER_SUCCESS,
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: SIGNIN_USER_FAILED,
        }
      );  
    }
    
  }
}

export const signOutUser = () => {
  return async function(dispatch) {
    dispatch({
      type: SIGNOUT_USER_REQUEST,
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
          }
        );     
      }
      catch
      {
        dispatch(
          {
            type: SIGNOUT_USER_FAILED,
          }
        );  
      }
    }
  }
};

export const updateUser = (email, password, name) => {
  return async function(dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    try
    {
      const response = await fetchWithRefresh(`${apiUrl}/auth/user`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json;charset=utf-8', authorization: localStorage.getItem("accessToken"),},
        body: JSON.stringify({ name, email, password, }),
      });  

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      dispatch(
        {
          type: SET_USER_SUCCESS,
          user: response.user
        }
      );   
      
      dispatch(
        {
          type: UPDATE_USER_SUCCESS,
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: UPDATE_USER_FAILED,
        }
      );  
    }
    
  }
}

export const forgotPassword = (email) => {
  return async function(dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
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
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: RESET_PASSWORD_FAILED,
        }
      );  
    }
    
  }
}

export const resetPassword = (password, token) => {
  return async function(dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
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
        }
      );     
    }
    catch
    {
      dispatch(
        {
          type: RESET_PASSWORD_FAILED,
        }
      );  
    }
    
  }
}





















