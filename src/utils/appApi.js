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