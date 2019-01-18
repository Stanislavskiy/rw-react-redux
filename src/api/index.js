import axios from "axios";
import { endpointSet } from "./utils";

/*------------------------------
  Endpoints
--------------------------------*/

const urls = endpointSet({
  root_url: "https://conduit.productionready.io/api",
  endpoints: {
    articles: `/articles?limit=10`,
    user: `/user`,
    login: `/users/login`,
    register: `/users`
  }
});

/*------------------------------
  API methods
--------------------------------*/

export function getArticles() {
  return axios
    .get(urls.articles)
    .then(response => {
      return response.data.articles;
    })
    .catch(error => {
      console.error(error);

      return [];
    });
}

export function getUser() {
  return axios
    .get(urls.user)
    .then(response => {
      return response.data.user;
    })
    .catch(error => {
      console.error(error);

      return [];
    });
}

export function authenticate({ email, password }) {
  return axios.post(
    urls.login,
    {user: {email, password}}
  );
}

export function register({ username, email, password }) {
  return axios.post(
    urls.register,
    { user: { username, email, password }}
  );
}