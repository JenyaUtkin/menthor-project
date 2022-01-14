const router = require('express').Router();
const express = require('express');
const {Users, Menthor,Practis} = require('../db/models')

router.get('/:id', async(req, res) => {
 const user = await Users.findByPk(req.params.id)
 if(user.role_id === 3){
   res.render('admin')
}else if(user.role_id === 2){
  user.dataValues.flag = false
} else {
  user.dataValues.flag = true
 }
 //console.log(user);
  res.render('profileRedactor',{user})
})

 router.post('/:id',async(req,res)=>{
   const {name, body, img, link, price} = req.body
   const practice = await Practis.create(req.body.title)
   const exp_id = practice.title
   const user = await Users.findOne({where: {id:Number(req.params.id)}})
   const user_id = user.id
   if(user.role_id===2){
     const myAnket = await Menthor.create({name, body, img, link, price,exp_id, user_id})
     res.redirect(`/cabinet/${user.id}`)
   }else if(user.role_id===2){
     const yourAncet = await Student.create({name, body, link})
     res.redirect(`/cabinet/${user.id}`)
   }
 })
 router.put('/',async(req,res)=>{

 })

module.exports = router

