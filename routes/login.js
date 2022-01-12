const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('login', { title: 'login' });
});

router.post('/', (req, res) => {
  res.redirect('/profile');
});

module.exports = router;
