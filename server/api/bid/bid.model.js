'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BidSchema = new Schema({
  id: String,
  name: String,
  creation_date: String,
  close_date: String,
  status_code: String
});

module.exports = mongoose.model('Bid', BidSchema);