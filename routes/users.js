var express = require('express');
var router = express.Router();

const {read} = require('../controllers/user.controllers')

/* GET users listing. */
router.get('/', read);

module.exports = router;
