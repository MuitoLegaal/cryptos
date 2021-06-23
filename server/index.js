const express = require('express');
const request = require('request');
const API_KEYS = process.env.REACT_APP_API_KEYS;

const app = express();
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

console.log("env ", process.env.NODE_ENV);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/data', (req, res) => {
  console.log(req.body)
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

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
}

app.listen(PORT, HOST, () => console.log(`listening on PORT:${PORT}`));