const express = require('express');

const router = express.Router();
const { mentors } = require('../mock/profileData');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home page', mentors });
});

router.post('/', (req, res) => {
  res.render('index', { title: 'Home page', mentors: mentors.slice(0, 2) });
});

module.exports = router;
