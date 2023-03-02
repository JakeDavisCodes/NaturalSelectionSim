const router = require('express').Router();
const controller = require('./controler.js');

router.get('/session/:s_id', controller.getSession);
router.post('/session', controller.postSession);
router.get('/user/:username/:hash', controller.getUser);
router.post('/user', controller.postUser);

module.exports = router;
