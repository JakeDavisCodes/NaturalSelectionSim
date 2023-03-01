const router = require('express').Router();
const controller = require('./controler.js');

router.get('/session/:s_id', controller.getSession);

module.exports = router;
