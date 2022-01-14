const router = require('express').Router();
const express = require('express');
const {Users, Menthor,Practis,Student,Tags} = require('../db/models')

router.get('/:id',async(req,res)=>{
const mentor = await Menthor.findOne({where:{user_id:req.params.id}})
if(mentor){
    res.render('profile',{mentor})
}else{
    const student = await Student.findOne({where:{user_id:req.params.id}})
    res.render('profile',{student}) 
}
})



module.exports = router