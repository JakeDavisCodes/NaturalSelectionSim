const router = require('express').Router();
const controller = require('./controler.js');

router.get('/session/:s_id', controller.getSession);
router.post('/session/:s_id', controller.postSession);
router.get('/session/:username/:hash', controller.getUser);

module.exports = router;
