const fetchCoinsData = async (currency) => {
  // const data = await fetch('/api/data', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded',  "accepts":"application/json" },
  //   body: `currencyFromFront=${currency}`
  // })
  // return await data.json()
 
    try {
      const res = await axios.get(`/api/message`);
      console.log("res ", res);
      return (res.data.message);
    } catch (e) {
      console.log("e ", e);
      return "Pas eu la donnée du serveur";
    }
  
}

export default fetchCoinsData;