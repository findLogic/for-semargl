import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postsReducer,
  news: newsReducer,
  user: userReducer,
});
