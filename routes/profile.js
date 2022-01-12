const express = require('express');

const { profileData } = require('../mock/profileData');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(profileData);
  res.render('profile', { title: 'profile', profile: profileData });
});

module.exports = router;
