const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const compression = require('compression');

const data = require('./data');
const totalCount = data.length;

const PORT = process.env.PORT || 3000;
const server = express();
server.use(helmet());
server.use(compression());
server.use(bodyParser.json());
server.use('/', express.static('dist'));
server.use('/api/data', (req, res) => {
  res.json(data[Math.floor(Math.random() * totalCount)]);
});

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
