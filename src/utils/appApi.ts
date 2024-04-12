import TBurgerIngredientsProps from "../components/BurgerIngredients/TBurgerIngredientsProps";


export const apiUrl = "https://norma.nomoreparties.space/api";

const checkResponse = (res: Response): Promise<any> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsRequest = () => {
  return fetch(`${apiUrl}/ingredients`)
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};

export const submitOrderRequest = (orderData: TBurgerIngredientsProps[]) => {
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
    .then((data: any) => {
      console.log(data);
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const refreshToken = () => {
  return (
    fetch(`${apiUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(checkResponse)
      // !! Важно для обновления токена в мидлваре, чтобы запись
      // была тут, а не в fetchWithRefresh
      .then((refreshData) => {
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        return refreshData;
      })
  );
};
//input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
export const fetchWithRefresh = async (url: RequestInfo, options: any): Promise<any> => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err:any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
















