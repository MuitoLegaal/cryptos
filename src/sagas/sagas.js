import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import { 
  receiveCoins,
  REQUEST_COINS,
  SENDING_COINS_REQUEST,
  UPDATE_CURRENCY
} from "../actions/actions";
import fetchCoinsData from "../utils/APIs/fetchCoinsData";

//Receive Coins Data
function* getCoinData(action) {
  yield put({ type: SENDING_COINS_REQUEST, sending: true })
  try {
    const data = yield call(fetchCoinsData, action.currency);
    if (data) {
      yield all([
        put({ type: UPDATE_CURRENCY, currency: action.currency }),
        put(receiveCoins(data))
      ])
    }
    return data
  }
  catch (error) {
    console.error("Error", error)
    // alert('An error occured. Please retry.')
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