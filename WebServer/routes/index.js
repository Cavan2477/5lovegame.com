var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var data_title = {
  title: '我爱游戏',
};

// Index.jade
var funcShowIndex = function(req, res){
	console.log('funcShowIndex');
	res.render('pages/index', data_title);
};

// Header.jade
var funcShowHeader = function(req, res){
	console.log('funcShowHeader');
	res.render('pages/header', data_title);
};

// 路由规则
module.exports = function(app){
  // index.jade
  app.get('/', funcShowIndex);
  app.get('/index', funcShowIndex);

  // header.jade
  app.get('/header', funcShowHeader);
};

