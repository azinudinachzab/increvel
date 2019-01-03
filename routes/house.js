var express = require('express');
var router = express.Router();
const House = require('../db/house');

/* GET house listing. */
router.get('/', function(req, res, next) {
  if(req.query.id==undefined){
    House.getIdAll().then(
      rumah => {
        res.render('rumah_kosong',{rumah});
      });
  }else{
    House.getId(req.query.id).then(
      rumah => {
        res.render('rumah',{rumah});
      });
  }
});

module.exports = router;
