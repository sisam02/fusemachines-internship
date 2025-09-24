const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/me', auth, async (req, res) => {
  return res.json({ message: 'Home', user: req.user });
});

module.exports = router;
