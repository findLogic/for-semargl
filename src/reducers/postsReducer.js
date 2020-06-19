import * as TYPES from '../actions/types';

// state = [
//   {
//     userId: 2,
//     id: 16,
//     title:
//       'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
//     body:
//       'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta',
//   }
// ];

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
