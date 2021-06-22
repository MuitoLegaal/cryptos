const express = require('express');
const request = require('request');
const API_KEYS = process.env.REACT_APP_API_KEYS;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const path = require('path')

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api', (req, res) => {
  request(
    { url: `${BASE_URL}/v1/cryptocurrency/listings/latest?start=1&limit=150&convert=${req.body.currencyFromFront}`, headers: { 'X-CMC_PRO_API_KEY': API_KEYS } },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( '/build' ))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
  });
}

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));