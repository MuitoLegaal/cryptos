export const RECEIVE_COINS = "RECEIVE_CURRENCIES";
export const REQUEST_COINS = 'REQUEST_COINS';
export const SENDING_COINS_REQUEST = 'SENDING_COINS_REQUEST';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_THEME = 'UPDATE_THEME';

export const receiveCoins = (data) => (
  { type: RECEIVE_COINS, data }
);

export const coinsRequestAction = (currency) => (
  { type: REQUEST_COINS, currency }
);

export const updateThemeAction = (themeChecked) => (
  { type: UPDATE_THEME, themeChecked }
);