// Libraries
import express from 'express';



const router = express.Router();

/* GET users listing. */
router.get('/cool', function(req, res) {
  res.send('You\'re so Cool');
});

export default router
