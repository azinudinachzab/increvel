var express = require('express');
var router = express.Router();
const Cust = require('../db/login');

/* GET home page. */
router.get('/', function(req, res, next) {
			res.render('login');
	});

router.post('/', function(req,res,next) {
		if(req.body.email && req.body.pass && req.body.lvl !== undefined){
			Cust.getEmail(req.body.email).then(
				guest => {
					if(!guest){
						res.json({
							alert:'Email Tidak terdaftar'
						});
					}
					else{
						var pass = guest.password_customer;
						if(req.body.pass!==pass){
						res.json({
							alert: 'Email atau password salah'
							});
						}
						else{
							res.json({
								sukses: 1
							});
						}
					}
				});
		}
});

module.exports = router;
