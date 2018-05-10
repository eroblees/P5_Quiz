var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models} = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET credits. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

/* GET quizzes.*/
router.get('/quizzes', function(req, res, next) {
	models.quiz.findAll()
 	.then(quizzes => {
		res.render('quizzes', { quizzes } );
	})
  	.catch(error => {
  		next(error)
  	});
});

/*
const quizzesController = (req, res, next) => {
	let template = "<h1>Quizzes disponibles</h1><ul>"
	/*for (let i = 1; i < 31; i++) {
		template += "<li><a href='/ruta/"+i+"'>Ruta" + i + "</a></li>"
	}
	template +="</ul>"
	template += models.quiz.findAll();
	//res.render('quizzes', { title: 'Quizzes' });
	res.send(template)
}

router.get('/quizzes', quizzesController);
*/

module.exports = router;
