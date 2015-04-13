var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jp2Schema = new Schema({
  jp:   
  {type: String},
  amount:
  {type: Number},
});

// statics
jp2Schema.statics.getJP = function (j, cb) {
  this.find({jp:j}, cb);
}

module.exports = mongoose.model('JP', jp2Schema)
