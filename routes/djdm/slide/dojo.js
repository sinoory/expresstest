var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('djdm/slide/demo', { title: 'Express' });
  //res.send('djdm/slide/demo');
  //res.render('demo', { title: 'Express' });
});

module.exports = router;
