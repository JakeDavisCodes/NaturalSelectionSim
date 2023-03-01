const router = require('express').Router();
const controller = require('./controler.js');

router.post('/session:s_id', controller.getSession);

module.exports = router;
