const apiUrl = "https://norma.nomoreparties.space/api";

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsRequest = () => {
  return fetch(`${apiUrl}/ingredients`)
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};

export const submitOrderRequest = (orderData) => {
  const body = {
    ingredients: orderData.map((item) => {
      return item._id;
    }),
  };
  return fetch(`${apiUrl}/orders`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(checkReponse)
    .then((data) => {
      console.log(data);
      if (data?.success) return data;
      return Promise.reject(data);
    });
};
