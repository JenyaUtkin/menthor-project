const express = require('express');
const router = express.Router();
const { Menthor } = require('../db/models/');


/* GET home page. */
router.get('/', async (req, res) => {

const mentor = await Menthor.findAll()
console.log(mentor)
return res.render('index', { mentor });
});



// router.post('/', async (req, res) => {
// })

module.exports = router;
