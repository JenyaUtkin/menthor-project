const router = require('express').Router();
const {checkUser, deeper, welcomeUser} = require('../midlleware/allMidlleware')
const {Users, Tags, Practis} = require('../db/models/');
const sha256 = require('sha256');
const enteress = require('../db/models/enteress');

router.get("/register", (req, res) => {
  res.render("registration");
});
router.post("/register", async (req, res) => {
  const { name, login } = req.body;
  const role_id = req.body.options
  const password = sha256(req.body.password);
  console.log(req.body.options);
  const user = await Users.create({ name, login, password,role_id });
  req.session.userName = user.name;
  //req.session.userEmail = user.email;
  req.session.userId = user.id;
 res.redirect('/')
  //res.redirect(`/user/profile/${user.id}`);
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", async (req, res) => {
  const { login } = req.body;
  const user = await Users.findOne({ where: { login } });
  if (user) {
    if (user.password === sha256(req.body.password)) {
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      req.session.userId = user.id;
      res.redirect(`/user/profile/${user.id}`);
    } else {
      res.send("It s not your password!!!");
    }
  } else {
    res.redirect("/error");
  }
});

router.get("/profile/:id", checkUser, deeper, async (req, res) => {
  const user = await Profils.findOne({where:{id:req.params.id}})
  // const tags = await Tags.findAll({where:{profils_id:user.id},
  // include:[{model:Enteress}])
  const entries = await Enteresses.findAll({where: {profils_id: user.id}})
  const tempArr = entries.map(e => e.tag_id)
  const currentUserTags = []
  for( let i = 0; i < tempArr.length; i+=1) {
    const tag = await Tags.findByPk(tempArr[i])
    currentUserTags.push(tag)
  }
  const practic = await Practis.findOne({where:{id:user.exp_id}})
  // const currentUserTags = await Tags.findAll({where: {id: tagIds}})
  res.render("profile", { user , currentUserTags, practic});
})
  

router.post('/profile/:id',checkUser, async (req, res) => {

        try {
          const newEntry = await Entry.create({ title: req.body.title, body: req.body.body, user_id:req.session.userId},{returning: true,plain: true});
          return res.redirect(`/entries/${newEntry.id}`);
        } catch (error) {
          res.render('error', {
            message: 'Не удалось добавить запись в базу данных.',
            error: {}
          });
        }
  return res.redirect(`/entries/${newEntry.id}`);
   });
router.get("/exit", (req, res) => {
  req.session.destroy();
  res.clearCookie("myAuth");
  return res.redirect("/");
});

module.exports = router