require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});