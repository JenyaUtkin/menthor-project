const express = require('express');
const router = express.Router();
const { Menthor, Tags } = require('../db/models/');


/* GET home page. */
router.get('/', async (req, res) => {

const mentor = await Menthor.findAll()
const tag = await Tags.findAll()

//console.log(mentor)
return res.render('index', { mentor, tag });
});





// router.post('/', async (req, res) => {
// })

module.exports = router;
