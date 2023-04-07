const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res) {
  res.send('You\'re so Cool');
});

module.exports = router;
