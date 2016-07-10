var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var data_title = {
  title: '我爱emu',
};

// Index.jade
var ShowIndex = function(req, res){
	console.log('ShowIndex');
	res.render('pages/index', data_title);
};

// Navigation.jade
var ShowNavigation = function(req, res){
	console.log('ShowNavigation');
	res.render('pages/navigation', data_title);
};

// 路由规则
module.exports = function(app){
  // index.jade
  app.get('/', ShowIndex);
  app.get('/index', ShowIndex);

  // header.jade
  app.get('/navigation', ShowNavigation);
};

