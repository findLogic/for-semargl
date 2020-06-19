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
