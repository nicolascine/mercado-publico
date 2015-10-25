'use strict';

var _ = require('lodash');
var Bid = require('./bid.model');
var request = require('request');
//var async = require('async');

// Get list of bids
exports.index = function(req, res) {
  Bid.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(things);
  });

};

// Get a single bid
exports.show = function(req, res) {
  Bid.findById(req.params.id, function (err, bid) {
    if(err) { return handleError(res, err); }
    if(!bid) { return res.status(404).send('Not Found'); }
    return res.json(bid);
  });
};

// Creates a new bid in the DB.
exports.create = function(req, res) {
  Bid.create(req.body, function(err, bid) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(bid);
  });
};

// Updates an existing bid in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bid.findById(req.params.id, function (err, bid) {
    if (err) { return handleError(res, err); }
    if(!bid) { return res.status(404).send('Not Found'); }
    var updated = _.merge(bid, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bid);
    });
  });
};

// Deletes a bid from the DB.
exports.destroy = function(req, res) {
  Bid.findById(req.params.id, function (err, bid) {
    if(err) { return handleError(res, err); }
    if(!bid) { return res.status(404).send('Not Found'); }
    bid.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}