const router = require('express').Router();
const express = require('express');
const {
  Users,
  Menthor,
  Practis,
  Student,
  Tags
} = require('../db/models')

router.get('/:id', async (req, res) => {
  const tags = await Tags.findAll
  const user = await Users.findByPk(req.params.id)
  if (user.role_id === 3) {
    res.render('admin')
  } else if (user.role_id === 1) {
    user.dataValues.flag = false
  } else {
    user.dataValues.flag = true
  }
  //console.log(user);
  res.render('profile', {
    user,
    tags
  })
})

router.post('/:id', async (req, res) => {
  const {
    name,
    body,
    link
  } = req.body
  console.log("===========", req.body);
  const user = await Users.findOne({
    where: {
      id: Number(req.params.id)
    }
  })
  const user_id = user.id
  if (user.role_id === 2) {
    console.log('========if1');
    const {
      price
    } = req.body.price
    const practice = await Practis.create(req.body.title)
    const exp_id = practice.title
    const {
      img
    } = req.body.link
    const myAnket = await Menthor.create({
      name,
      body,
      img,
      link,
      price,
      exp_id,
      user_id
    })
    res.redirect(`/cabinet/${user.id}`)
  } else if (user.role_id === 1) {
    console.log('=======if2');
    const yourAncet = await Student.create({
      name,
      body,
      link,
      user_id
    })
    res.redirect(`/cabinet/${user.id}`)
  }
  console.log('========lod', user.role_id);
})

// router.put('/:id', async (req, res) => {
//   const {singer,songTitle} = req.body
//   console.log(req.body);
//   console.log(req.params);
// try {
//   await Entry.update({singer,songTitle}, { where: { id: req.params.id } });
//   res.sendStatus(200)
// } catch (error) {
//   console.log(error);
// }
// });


module.exports = router
