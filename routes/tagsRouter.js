const router = require('express').Router();
const express = require('express');
const {Users, Menthor,Practis,Student,Tags,Enteresses} = require('../db/models')

router.get("/:id",  async (req, res) => {
    const mentor = await Menthor.findOne({where:{user_id:req.params.id}})
    if(mentor){
          const tag = await Tags.findAll()
      res.render("myCabinet", { mentor , tag})
    }else {
      const student = await Student.findOne({where:{user_id:req.params.id}})
      res.render('myCabinet',{student}) 
    }
  })
  
  
  // const tempArr = entries.map(e => e.tag_id)
  // const currentUserTags = []
  // for( let i = 0; i < tempArr.length; i+=1) {
    // const tag = await Tags.findByPk(tempArr[i])
    //   currentUserTags.push(tag)currentUserTags, practic}
    ///console.log(currentUserTags);
    //  const practic = await Menthor.findOne({where:{id:user.exp_id}})
    // const currentUserTags = await Tags.findAll({where: {id: tagIds}})
    
    // router.post('/:id',async(req,res)=>{
 // const tags = await Tags.findAll({where:{profils_id:user.id}})
// })

 module.exports = router