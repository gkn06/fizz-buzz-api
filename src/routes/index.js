const router = require('express').Router();

/**Register all routes here */
router.use('/api/fizz-buzz', require('./fizz-buzz.route'));

router.get('/error', (req, res) => {
  res.send("The URL you are trying to reach does not exist.")
})

module.exports = router