import store from "../../store";
import { getArticles } from "../../api";

// ACTION TYPES

export const ARTICLES_UPDATE_LIST = "ARTICLES_UPDATE_LIST";

// INITIAL STATE

const initialState = {
  list: null
};

// REDUCER

export function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_UPDATE_LIST:
      return {
        ...state,
        list: action.payload
      };
  }

  return state;
}

// ASYNC ACTION CREATORS

export function loadArticles() {
  return dispatch => {
    getArticles().then(data => {
      dispatch({
        type: ARTICLES_UPDATE_LIST,
        payload: data
      });
    });
  };
}
