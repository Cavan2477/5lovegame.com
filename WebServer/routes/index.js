var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/

var data_title = 
{
  title: '5lovegames',
};

// 首页
var func_home_page = function(req, res)
{
	console.log('func_home_page');

	res.render('pages/index', data_title);
};

// 路由规则
module.exports = function(app)
{
  // 首页
  app.get('/', func_home_page);
};

