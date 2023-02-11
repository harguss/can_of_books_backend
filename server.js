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

  response.send('test request received');

});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
