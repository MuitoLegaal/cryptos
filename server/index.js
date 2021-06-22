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

app.post('/api', (req, res) => {
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

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("build", "index.html"))
  );
}

if (process.env.NODE_ENV === "dev") {
  // Express will serve up production assets
  app.use(express.static("public"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("public", "index.html"))
  );
}

app.listen(PORT, () => console.log(`listening on PORT:${PORT}`));