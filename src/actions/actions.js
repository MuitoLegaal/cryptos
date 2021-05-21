export const RECEIVE_COINS = "RECEIVE_CURRENCIES";
export const REQUEST_COINS = 'REQUEST_COINS';
export const SENDING_COINS_REQUEST = 'SENDING_COINS_REQUEST';

export const receiveCoins = (data) => (
  { type: RECEIVE_COINS, data }
);

export const coinsRequestAction = () => (
  { type: REQUEST_COINS }
);