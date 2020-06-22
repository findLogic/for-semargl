import * as TYPES from './types';
import axios from 'axios';

// Fetch some dummy info from https://jsonplaceholder.typicode.com/posts
export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );

  dispatch({
    type: TYPES.FETCH_POSTS,
    payload: response.data,
  });
};

// Fetch commets as news
export const fetchNews = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/comments',
  );

  dispatch({
    type: TYPES.FETCH_NEWS,
    payload: response.data,
  });
};

// Sign in
export const signIn = (user) => {
  localStorage.setItem('user', user.login);
  return {
    type: TYPES.SIGN_IN,
    payload: user,
  };
};

// Sign out
export const signOut = () => {
  localStorage.removeItem('user');
  return {
    type: TYPES.SING_OUT,
  };
};

// Check local storage
export const checkLocalStorage = () => (dispatch) => {
  const user = localStorage.getItem('user');
  if (!user) {
    dispatch(signOut());
  } else {
    dispatch(signIn(user));
  }
};
