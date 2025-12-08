const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true },    // the quote itself
  author: { type: String, required: true },  // who said it
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
