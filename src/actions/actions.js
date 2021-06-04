export const RECEIVE_COINS = "RECEIVE_CURRENCIES";
export const REQUEST_COINS = 'REQUEST_COINS';
export const SENDING_COINS_REQUEST = 'SENDING_COINS_REQUEST';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export const receiveCoins = (data) => (
  { type: RECEIVE_COINS, data }
);

export const coinsRequestAction = (currency) => (
  { type: REQUEST_COINS, currency }
);