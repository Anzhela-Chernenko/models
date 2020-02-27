const mongoose = require('mongoose');


const filesSchema = mongoose.Schema({

  fullName: String,
  date: Date,
  fileUrl: String

});

module.exports = mongoose.model('filesFromStudent', filesSchema);
