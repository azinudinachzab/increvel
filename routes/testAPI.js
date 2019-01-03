var express = require('express');
var router = express.Router();

const Cust = require('../db/login');

router.post('/', function(req, res, next) {
  Cust.getEmail(req.body.email).then(
    guest => {
      res.json({
        guest
      });
    });
});

module.exports = router;
