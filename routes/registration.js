const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('registration', { title: 'registration' });
});

router.post('/', (req, res) => {
  res.redirect('/profile');
});

module.exports = router;
