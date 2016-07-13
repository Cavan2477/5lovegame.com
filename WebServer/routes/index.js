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

// 路由规则
module.exports = function(app) {
  // index.jade
  app.get('/', ShowIndex);
  app.get('/index', ShowIndex);

  // navigation.jade
  app.get('/navigation', ShowNavigation);

  // rom_mgr/fc
  app.get('/rom_mgr/fc', ShowRomMgrFC);

  // rom_mgr/sfc
  app.get('/rom_mgr/sfc', ShowRomMgrSFC);
};

// Index.jade
var ShowIndex = function(req, res) {
	console.log('ShowIndex');
	res.render('pages/index', data_title);
};

// Navigation.jade
var ShowNavigation = function(req, res) {
	console.log('ShowNavigation');
	res.render('pages/navigation', data_title);
};

// rom_mgr/fc.jade
var ShowRomMgrFC = function(req, res) {
  console.log('ShowRomMgrFC');
  res.render('pages/rom_mgr/fc', data_title);
};

// rom_mgr/sfc.jade
var ShowRomMgrSFC = function(req, res) {
  console.log('ShowRomMgrSFC');
  res.render('pages/rom_mgr/sfc', data_title);
};
