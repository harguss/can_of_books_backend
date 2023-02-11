'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {type: String, require: true},
  description: {type: String, require: true},
  status: {type: Boolean, require: true},
});

const BookModel = mongoose.model('Books', bookSchema);

module.exports = BookModel;
