import axios from "axios";

const API_ROOT = "https://conduit.productionready.io/api";

const urls = {
  articles: `${API_ROOT}/articles?limit=10`
};

export function getArticles() {
  return axios.get(urls.articles).then(response => {
    return response.data.articles;
  }).catch(error => {
    console.error(error);
    
    return [];
  });
};
