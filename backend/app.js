const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
 const app = express();

const Files = require('./models/files');

const cors = require('cors');
app.use(cors());
const bodyparser = require('body-parser');
app.use(bodyparser.json());

const uri = 'mongodb://Libida:Libida_1102@anzhela-shard-00-00-bxrii.mongodb.net,anzhela-shard-00-01-bxrii.mongodb.net,anzhela-shard-00-02-bxrii.mongodb.net:27017/test?ssl=true&replicaSet=anzhela-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
  console.log('Connected')
}).catch(err => console.log(err));

const userRoutes = require('./user');
app.use('/api/user', userRoutes);

const adminRoutes = require('./admin');
app.use('/api/admin', adminRoutes);

app.post('/api/post/getAllPost', (req, res) => {
  mongoose.connect(uri, {useNewUrlParser: true}, function(err){
    if(err) throw err;
    Files.find({},[],{ sort: { _id: -1 } },(err, doc) => {
      if(err) throw err;
      return res.status(200).json({
        status: 'success',
        data: doc
      })
    })
  });
});

app.post('/api/post/removeFile', (req, res) => {
  var deleteUrl = req.body.file;
  console.log("deleteUrl = ", deleteUrl)
  mongoose.connect(uri, {useNewUrlParser: true}, function(err){
    if(err) throw err;
    Files.findOneAndDelete({fileUrl: deleteUrl}, (err, doc) => {
      if(err) throw err;
      var nameFile = deleteUrl.split("/");
      fs.unlink('./backend/uploads/'+ nameFile[nameFile.length - 1] +'', (err) => {
        if (err) console.log(err);
        else {

        }
      });
      return res.status(200).json({
        status: 'success'
      });
    })
  });
});

var fileTypes = [/.*.xlsx$/, /.*.xls$/, /.*.docx$/];

app.get(fileTypes, function(request, response, err){
  var filePath = request.url.substr(1);
  filePath = decodeURIComponent(filePath);
  try {
    filePath = filePath.replace("uploads/", '');
  }
  catch (err){}

  console.log("filePath "+ filePath + "");
  fs.readFile('./backend/uploads/'+ filePath +'', function(error, data){

    if(error){
      console.log("err = ", error)
      response.statusCode = 404;
      response.end("Ресурс не найден!!");
    }
    else{
      response.send(data);
    }

    return;
  })
});


module.exports = app;









