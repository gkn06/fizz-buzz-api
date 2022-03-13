const router = require('express').Router();
const { get } = require('./fizz-buzz.controller');

router.get('/:count', get);

module.exports = router;