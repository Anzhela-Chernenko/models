const mongoose = require('mongoose');


const scoreSchema = mongoose.Schema({

  fullName: String,
  rating: String,

});

module.exports = mongoose.model('scoreStudent', scoreSchema);
