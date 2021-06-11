import { 
  RECEIVE_COINS,
  SENDING_COINS_REQUEST,
  UPDATE_CURRENCY,
  UPDATE_THEME,
} from '../actions/actions';


let initialState = {
  data: [],
  isCurrentlyLoading: false,
  currency: "EUR",
  theme: false
}

function coins(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COINS:
      return { ...state, data: action.data.data };
    case SENDING_COINS_REQUEST:
      return { ...state, isCurrentlyLoading: action.sending };
    case UPDATE_CURRENCY:
      return { ...state, currency: action.currency};
    case UPDATE_THEME:
      return { ...state, blackTheme: action.blackTheme }
    default:
      return state;
  }
};

export default coins;