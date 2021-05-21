import { call, put, takeLatest, fork } from "redux-saga/effects";
import { 
  receiveCoins, REQUEST_COINS, SENDING_COINS_REQUEST
} from "../actions/actions";
import fetchCoinsData from "../utils/fetchCoinsData";

//Receive Coins Data
function* getCoinData() {
  yield put({ type: SENDING_COINS_REQUEST, sending: true })
  try {
    const data = yield call(fetchCoinsData);
    if (data) {
      yield put(receiveCoins(data))
    }
    return data
  }
  catch (error) {
    console.error("Error", error)
    alert('An error occured. Please retry.')
  }
  finally {
    yield put({ type: SENDING_COINS_REQUEST, sending: false })
  }
}

function* watchLastCoinDataSaga() {
  yield takeLatest(REQUEST_COINS, getCoinData);
};

export default function* saga() {
  yield fork(watchLastCoinDataSaga)
}