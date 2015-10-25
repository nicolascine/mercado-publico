'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BidSchema = new Schema({
  id: String,
  name: String
});

module.exports = mongoose.model('Bid', BidSchema);