export function setAuthToken(token) {
  /* 
    Save authentication token to the local
    storage
  */
  localStorage.authToken = token;
}

export function removeAuthToken() {
  /* 
    Remove authentication token from the local
    storage
  */
  localStorage.authToken = null;
}