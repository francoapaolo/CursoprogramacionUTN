var express = require('express');
var router = express.Router();

/* GET contacto. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});

module.exports = router;