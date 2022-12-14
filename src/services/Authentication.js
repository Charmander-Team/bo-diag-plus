import customAxios from "./customAxios";

const route = "/api/token/";
const routeTokenRefresh = "/api/token/refresh/";

const authentication = {
  async byPostToken(dataAdmin) {
    let response = await customAxios
      .post(`${route}`, dataAdmin)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`Route ${route} does not exist !`, error);
      });

    if (response) {
      return response.data;
    } else {
      return null;
    }
  },

  async refresh(token) {
    let response = await customAxios
      .post(`${routeTokenRefresh}`, { refresh: token })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`Route ${routeTokenRefresh} does not exist !`, error);
      });

    if (response) {
      return response.data;
    } else {
      return null;
    }
  },
};

export default authentication;
