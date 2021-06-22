const express = require('express');
const request = require('request');
const API_KEYS = process.env.REACT_APP_API_KEYS;

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {
  request(
    { url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=150&convert=${req.body.currencyFromFront}`, headers: { 'X-CMC_PRO_API_KEY': API_KEYS,} },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.listen(PORT, () => console.log(`listening on PORT:${PORT}`));