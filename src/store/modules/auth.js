import { authenticate, register } from "../../api";
import { setAuthToken, removeAuthToken } from "../../utils/auth";
import jwtDecode from "jwt-decode";

// ACTION TYPES
const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
const AUTH_LOGIN_UNLOAD = "AUTH_LOGIN_UNLOAD";
const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
const AUTH_REGISTER_UNLOAD = "AUTH_REGISTER_UNLOAD";
const AUTH_REQUEST = "AUTH_REQUEST";
const AUTH_FAILURE = "AUTH_FAILURE";
const AUTH_UPDATE_FORM = "AUTH_UPDATE_FORM";
const AUTH_LOGOUT = "AUTH_LOGOUT";

// INITIAL STATE

const initialState = {
  inProgress: false,
  currentUser: null,
  errors: null,
  username: "",
  email: "",
  password: ""
};

// REDUCER

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Login */
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        currentUser: action.user,
        errors: null
      };
    case AUTH_LOGIN_UNLOAD:
      return {
        ...state,
        errors: null,
        email: "",
        password: ""
      };

    /* Register */
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        currentUser: action.user,
        errors: null
      };
    case AUTH_REGISTER_UNLOAD:
      return {
        ...state,
        errors: null,
        username: "",
        email: "",
        password: ""
      };

    /* Common */
    case AUTH_REQUEST:
      return {
        ...state,
        inProgress: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        inProgress: false,
        errors: action.errors
      };
    case AUTH_UPDATE_FORM:
      return {
        ...state,
        [action.key]: action.value
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
    dispatch({ type: AUTH_REQUEST });

    authenticate(credentials)
      .then(res => {
        setAuthToken(res.data.user.token)
        
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          user: jwtDecode(res.data.user.token)
        });
      })
      .catch(error => {
        dispatch({
          type: AUTH_FAILURE,
          errors: error.response.data.errors
        });
      });
  };
}

export function createAccount(fields) {
  return dispatch => {
    dispatch({ type: AUTH_REQUEST });

    register(fields)
      .then(res => {
        setAuthToken(res.data.user.token)
        dispatch({
          type: AUTH_REGISTER_SUCCESS,
          user: jwtDecode(res.data.user.token)
        });
      })
      .catch(error => {
        dispatch({
          type: AUTH_FAILURE,
          errors: error.response.data.errors
        });
      });
  };
}

export function logout() {
  removeAuthToken()

  return {
    type: AUTH_LOGOUT
  };
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

export function registerUnload() {
  return {
    type: AUTH_REGISTER_UNLOAD
  };
}
