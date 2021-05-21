export const RECEIVE_COINS = "RECEIVE_CURRENCIES";

export const receiveCoins = (coin) => (
  { type: RECEIVE_COINS, coin }
);