var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('djdm/gauge/gauge', { title: 'Express' });
  //res.send('gauge');
});

module.exports = router;
