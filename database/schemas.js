const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema;

const review = new Schema({
  title: String,
  rating: Number, //star rating from 1-5
  user: String,
  body: String,
  pics: [{ url: String }],
  helpfulCount: Number,
  unhelpfulCount: Number,
  recommended: Boolean,
  verified: Boolean,
  purchasedDate: Date,
  comments: [{
    title: String,
    date: {type: Date, default: Date.now},
    user: String,
    helpfulCount: String,
    unhelpfulCount: String,
    body: String
  }]
}, 
{
  timestamps: true
});

module.exports = review;