import { RECEIVE_COINS } from '../actions/actions';

let initialState = {
  data = undefined
}

function coins(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COINS:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default coins;