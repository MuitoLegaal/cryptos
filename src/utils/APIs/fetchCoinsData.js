const API_KEYS = process.env.REACT_APP_API_KEYS;

const fetchCoinsData = async (currency) => {
  const data = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=150&convert=${currency}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'X-CMC_PRO_API_KEY': API_KEYS },
    body: `currencyFromFront=${currency}`
  })
  return await data.json()
}

export default fetchCoinsData;