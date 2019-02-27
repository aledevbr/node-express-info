const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());

app.use(cors()); // Access-Control-Allow-Origin: *

const main = () => {

  app.all('/*', getInfos);

  app.listen(80, () => {
    console.log('Listening on port 80...');
  });
};

const getInfos = (req, res) => {
  const remoteIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({
    remoteip: remoteIp,
    method: req.method,
    url: req.url,
    _parsedUrl: req._parsedUrl,
    query: req.query,
    params: req.params,
    headers: req.headers,
    body: req.body
  })
    .end();
};

main();