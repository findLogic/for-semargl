import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.SING_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
