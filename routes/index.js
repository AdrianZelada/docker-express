var express = require('express');
var router = express.Router();
var cmdGit = require('../git.status');

/* GET home page. */
router.get('/', function(req, res, next) {
  cmdGit.lastCommit().then((git)=>{
    res.render('index', { title: 'Express',lastCommit:git });  
  });
  // res.render('index', { title: 'Expresssssss' });
});

module.exports = router;
