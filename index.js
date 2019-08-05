const express = require('express');
const server = express();
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send("Try another endpoint");
})

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
