import { authenticate } from "../../api";
import jwtDecode from "jwt-decode";

// ACTION TYPES

const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
const AUTH_UPDATE_FORM = "AUTH_UPDATE_FORM";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const AUTH_UNLOAD = "AUTH_UNLOAD";

// INITIAL STATE

const initialState = {
  inProgress: false,
  currentUser: null,
  errors: null,
  email: "",
  password: ""
};

// REDUCER

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        inProgress: true
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        inProgress: false,
        errors: action.errors
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        currentUser: action.user,
        errors: null
      };
    case AUTH_UPDATE_FORM:
      return {
        ...state,
        [action.key]: action.value
      };
    case AUTH_LOGIN_UNLOAD:
      return {
        ...state,
        errors: null,
        email: "",
        password: ""
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        inProgress: false,
        currentUser: null,
        errors: null
      };
  }

  return state;
};

// ACTION CREATORS

export function login(credentials) {
  return dispatch => {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    authenticate(credentials)
      .then(res => {
        localStorage.authToken = res.data.user.token; // Save token
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          user: jwtDecode(res.data.user.token)
        });
      })
      .catch(error => {
        dispatch({
          type: AUTH_LOGIN_FAILURE,
          errors: error.response.data.errors
        });
      });
  };
}

export function logout() {
  localStorage.authToken = null; // Remove token

  return {
    type: AUTH_LOGOUT
  }
}

export function updateForm(key, value) {
  return {
    type: AUTH_UPDATE_FORM,
    key: key,
    value: value
  };
}

export function loginUnload() {
  return {
    type: AUTH_LOGIN_UNLOAD
  };
}
  return {
    type: AUTH_UNLOAD
  };
}
