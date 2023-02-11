'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');

const Books = require('./models/books.js');

mongoose.connect(process.env.DB_URL);
// comsole.log;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 5005;

app.get('/', (request, response) => {

  response.status(200).send('Welcome');
});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
try {
  let results = await Books.find();
  response.status(200).send(results);
} catch (error) {
  next(error);
}
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request,res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
