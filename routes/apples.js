var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apples', {message: 'Apples are great'});
});

module.exports = router;
