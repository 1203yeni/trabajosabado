var express = require('express');
var router = express.Router();
const User = require('../controllers/UserController');

// const Sequelize = require('sequelize')
// const usuario = require('../models/').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/api/user', function(req, res) {
//  return usuario.findAll({});
//  .then(usuario =>res.status(200).send(usuario))
// });
router.get('/api/user',User.List);
router.get('/api/user/Nombre/:firstName',User.ListAT);


module.exports = router;