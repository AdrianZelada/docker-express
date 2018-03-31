var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let data = {
    name:'adrian',
    dog:'chicho',
    yearsOld:'20',
    last_name:'zelada'
  }
  res.json(data);
});

module.exports = router;
