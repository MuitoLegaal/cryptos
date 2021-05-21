import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { receiveCoins, RECEIVE_COINS } from "../actions/actions";
import fetchCoinsData from "../utils/fetchCoinsData";

//Receive Coins Data
function* getCoinData(action) {
  try {
    const data = yield call(fetchCoinsData);
    if (data) {
      yield all([
        put(receiveCoins(data)),
      ]);
    }
    return data
  }
  catch (error) {
    console.error("Error", error)
    alert('An error occured. Please retry.')
  }
}

function* watchLastCoinDataSaga() {
  yield takeLatest(RECEIVE_COINS, getCoinData);
};

export default function* saga() {
  yield fork(watchLastCoinDataSaga)
}