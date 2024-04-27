import { TWsOrderFeedUserState } from "../services/reducers/ordersFeedUser";
import { TBurgerIngredientsProps } from "./Types/ingredientsTypes";
import { TSubmitOrderParams } from "./Types/orderTypes";


export const apiUrl = "https://norma.nomoreparties.space/api";

type TOptions = {
  headers?: Record<string, string>;
  method?: string;
  body?: string;
  refreshToken?: string;
  accessToken?: string;
  token?: string
};

type TResponse = {
  method?: string;
  body?: string
  success: boolean;
  refreshToken?: string;
  accessToken?: string;
  user: {email: string; name: string;};
  name: string; order: {number: number;}
};


const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) {
    return await res.json();
  } else {
    const err = await res.json();
    return Promise.reject(err);
  }
};

export const request = async (endpoint: string, options: TOptions): Promise<TResponse> => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, options);
    return await checkResponse(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

type TIngredientsRequestResponse = {
  success: boolean;
  refreshToken?: string;
  accessToken?: string;
  data?: TBurgerIngredientsProps[];
};

export const getIngredientsRequest = async (): Promise<TIngredientsRequestResponse> => 
    await request('ingredients', { method: "GET" });



export const submitOrderRequest = (orderData: TBurgerIngredientsProps[]): Promise<{ name: string; order: {number: number;}}> => {
  const body = {
    ingredients: orderData.map((item) => {
      return item._id;
    }),
  };
  return fetchWithRefresh(`${apiUrl}/orders`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => {
      console.log(data);
      if (data?.success) return data;
      return Promise.reject(data);
    });
};


type TRefreshTokenResponse = {
  success: boolean;
  refreshToken?: string;
  accessToken?: string;
};

export const refreshToken = async (): Promise<TRefreshTokenResponse> => {
  return (
    await request(`/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then((responce )  => {
        let refreshData= responce as TRefreshTokenResponse;
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken as string);
        localStorage.setItem("accessToken", refreshData.accessToken as string);
        return refreshData;
      })
  );
};
//input: RequestInfo | URL, init?: RequestInit): Promise<Response>;


export const fetchWithRefresh = async (url: RequestInfo, options: TOptions): Promise<TResponse> => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      options.headers && (options.headers.Authorization = refreshData.accessToken as string);
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};















