const express = require('express');
const multer = require('multer');
const router = express.Router();
const Files = require('./models/files');
const Score = require('./models/score');
const User = require('./models/user');

const now = new Date();
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'backend/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, '' + now.toISOString().substring(0, 10) + '_' + file.originalname + "")
  }
});

const upload = multer({
  storage: storage
});


router.post('/save-file', upload.array('file'), (req,res) => {
  console.log("write file");
  res.status(201).json({message: 'Файл добавлено'});
});


router.post('/send-file', (req, res, next) => {

  const url = req.protocol + '://' + req.get('host');
  var now = new Date();
  const files = new Files({
    fullName: req.body.fullName,
    fileUrl: url + '/uploads/' + now.toISOString().substring(0, 10) + '_' + req.body.fileUrl,
    date: now
  });

  files.save().then(response => {
    res.status(201).json({message: 'добавлено'});
  }).catch(error => {
    console.log(error);
  });
});

router.post('/send-score', (req, res, next) => {

  const score = new Score({
    fullName: req.body.fullName,
    rating: req.body.rating
  });

  score.save().then(response => {
    res.status(201).json({message: 'добавлено'});
  }).catch(error => {
    console.log(error);
  });
});

router.get('/users', (req, res, next) => {
  User.find({}, 'email isAdmin').then(user => {
    if(!user) {
      res.status(404).json({message: 'Користувача не знайдено'});
    }
    res.status(200).json(user);
  }).catch(error => {
    console.log(error);
  });
});

router.post('/delete-user', (req, res, next) => {
  User.deleteOne({email: req.body.email}).then(res1 => {
    User.find().then(users => {
      res.status(201).json(users);
    }).catch(error => {console.log(error)});
  }).catch(error => {console.log(error)});
});

router.post('/admin-user', (req, res) => {
  User.findOneAndUpdate({email: req.body.email}, {$set: {isAdmin: 1}}, {new: true}).then(user => {
    User.find().then(users => {
      res.status(200).json(users);
    }).catch(error => {console.log(error)});
  }).catch(error => {console.log(error)});
});


router.get('/score', (req, res, next) => {
  Score.find({}, 'fullName rating').then(score => {
    if(!score) {
      res.status(404).json({message: ' не знайдено'});
    }
    res.status(200).json(score);
  }).catch(error => {
    console.log(error);
  });
});

router.post('/delete-student', (req, res, next) => {
  Score.deleteOne({fullName: req.body.fullName, rating: req.body.rating}).then(res1 => {
    Score.find().then(score => {
      res.status(201).json(score);
    }).catch(error => {console.log(error)});
  }).catch(error => {console.log(error)});
});




module.exports = router;
