const express = require('express');
const router = express.Router();
const { Menthor ,Tags } = require('../db/models/');
const {Op} = require('sequelize');


router.post('/', async (req, res) => {
  console.log('------------>',req.body)
  const all = await Menthor.findAll({include:{
    model: Tags,
    required: true,
    where: {
      title: {
        [Op.iLike] : `%${req.body.formData}%`
      }
    }
  }
  
}, {raw: true})

//console.log('----------------------------->>>>>>>>', all)
res.json(all)

})


module.exports = router;
