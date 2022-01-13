const router = require('express').Router();
const {Users} = require('../db/models/');
const sha256 = require('sha256')
router.get("/register", (req, res) => {
  res.render("registration");
});
router.post("/register", async (req, res) => {
  const { name, email, role_id } = req.body;
  const password = sha256(req.body.password);
  const user = await Users.create({ name, email, password });
  req.session.userName = user.name;
  req.session.userEmail = user.email;
  req.session.userId = user.id;
  res.redirect(`/user/profile/${user.id}`);
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ where: { email } });
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

router.get("/profile/:id",  async (req, res) => {
  const user = await Users.findByPk(req.params.id);
  const post = await Entry.findAll({ where: { user_id: req.params.id } });
  res.render("profile", { user, post });
});
// router.post('/profile/:id',checkUser, async (req, res) => {

//         try {
//           const newEntry = await Entry.create({ title: req.body.title, body: req.body.body, user_id:req.session.userId},{returning: true,plain: true});
//           return res.redirect(`/entries/${newEntry.id}`);
//         } catch (error) {
//           res.render('error', {
//             message: 'Не удалось добавить запись в базу данных.',
//             error: {}
//           });
//         }
//   return res.redirect(`/entries/${newEntry.id}`);
//    });
router.get("/exit", (req, res) => {
  req.session.destroy();
  res.clearCookie("myAuth");
  return res.redirect("/");
});

module.exports = router