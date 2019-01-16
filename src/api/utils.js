import _ from "lodash";

export function endpointSet({ root_url = "", endpoints = {} }) {
  // Combine endpoints with root url
  const urls = _.mapValues(endpoints, val => {
    return `${root_url}${val}`;
  });

  return urls;
}
