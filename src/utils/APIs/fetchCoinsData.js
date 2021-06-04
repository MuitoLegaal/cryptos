import { API_KEYS } from '../urlAPIs';

const initRequest = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'X-CMC_PRO_API_KEY': API_KEYS,
    'Access-Control-All-Origin': '*'
  },
  json: true,
  gzip: true
}

const fetchCoinsData = async (currency) => {
  const data = await fetch(`https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=${currency}`,
  initRequest)
  return await data.json()
}

export default fetchCoinsData;