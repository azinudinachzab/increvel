var express = require('express');
var router = express.Router();
const House = require('../db/house');

/* GET home page. */
router.get('/', function(req, res, next) {
	House.getIdAll().then(
		rumah => {
			res.render('index',{rumah});
		});
	});

	router.post('/', function(req,res,next){
		if(req.body.email && req.body.pass && req.body.lvl !== undefined){
			House.getIdAll().then(
				rumah => {
					res.render('index2',{rumah});
				});
		}else{
			House.getIdAll().then(
				rumah => {
					res.render('index',{rumah});
				});
		}
	});

module.exports = router;
