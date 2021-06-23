const fetchCoinsData = async (currency) => {
  const data = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded',  "accepts":"application/json" },
    body: `currencyFromFront=${currency}`
  })
  return await data.json()
}

export default fetchCoinsData;