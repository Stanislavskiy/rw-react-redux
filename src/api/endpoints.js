import _ from 'lodash';

const API_ROOT = 'https://conduit.productionready.io/api';

const endpoints = {
  articles: `/articles?limit=10`,
};

// Combine endpoints with API root
const urls = _.mapValues(endpoints, val => {
  return `${API_ROOT}${val}`;
});

export default urls;  