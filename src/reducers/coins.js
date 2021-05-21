import { RECEIVE_COINS, SENDING_COINS_REQUEST } from '../actions/actions';


let initialState = {
  data: [],
  isCurrentlyLoading: false,
}

function coins(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COINS:
      return { ...state, data: action.data.data };
    case SENDING_COINS_REQUEST:
      return { ...state, isCurrentlyLoading: action.sending };
    default:
      return state;
  }
};

export default coins;