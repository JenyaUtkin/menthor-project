const router = require('express').Router();
const {checkUser, deeper, welcomeUser} = require('../midlleware/allMidlleware')
const {Users, Tags, Practis, Enteresses, Menthor} = require('../db/models/');
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
  res.redirect(`/profil/${user.id}`)
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
      req.session.userId = user.id;
      res.redirect(`/cabinet/${user.id}`);
    } else {
      res.send("It s not your password!!!");
    }
  } else {
    res.redirect("/user/register");
  }
});


  


router.get("/exit", (req, res) => {
  req.session.destroy();
  res.clearCookie("myAuth");
  return res.redirect("/");
});


module.exports = router
