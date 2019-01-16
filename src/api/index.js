import axios from 'axios';
import urls from 'endpoints';

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
