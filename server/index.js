const express = require('express');
const request = require('request');
const API_KEYS = process.env.REACT_APP_API_KEYS;
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log("env", process.env.NODE_ENV)
var environment = process.env.NODE_ENV || 'development';

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT")
//   next();
// });

app.use(cors())


app.post('/api/data', (req, res) => {
  setTimeout(() => {
    res.send('done');
  }, 180000)
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

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';


// Express only serves static assets in production
if (environment === "production") {
  app.use(express.static("client/build"));
  app.post("/*", (req, res) => {
    res.sendFile("client/build/index.html");
  })
}

app.listen(PORT, HOST, () => console.log(`listening on PORT:${PORT}`));