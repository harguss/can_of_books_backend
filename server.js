'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
app.post('/books', postBooks);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id', updateBooks);


async function updateBooks(request, response, error){
  let id = request.params.id;
  let bookData = request.body;
  try {
    let updatedBook = await Book.findByIdAndUpdate(id, bookData, {
      new:true,
      overwrite: true,
    });
    response.status(200).send(updatedBook);
  } catch (error) {
    next(error);
  }
}

async function getBooks(request, response, next) {
try {
  let results = await Books.find();
  response.status(200).send(results);
} catch (error) {
  next(error);
}
}

async function postBooks(request, response, next) {
  console.log('posting books', request.body);
  try {
    let createBook = await Books.create(request.body);
    response.status(200).send(createBook);
  } catch (error) {
    next(error);
  }
}

async function deleteBooks(request, response, next){
  console.log('id', request.params.id);
  try {
    let id = request.params.id;
    await Books.findByIdAndDelete(id);
    response.status(200).send('Book was erased');
  } catch (error) {
    
  }


}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request,res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
