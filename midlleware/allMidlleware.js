const {Menthor} = require('../db/models')



const checkUser = (req, res, next) => {
  if (req.session.userName) {
    next();
  } else {
    res.redirect('/user/register');
  }
};
// const checkWritter = async(req,res,next)=>{


//   const user = await Menthor.findOne({where:{user_id:req.session.userId}})
//   if(user){
//   res.redirect(`/user/profile/${user.id}`)
//   }
// }
const deeper = (req, res, next) => {
  if (req.session.userId === Number(req.params.id)) {
    next();
  } else {
    res.redirect(`/user/profile/${req.session.userId}`);
  }
};
const welcomeUser = (req, res, next) => {
  res.locals.userId = req.session?.userId;
  if (req.session) {
    res.locals.userName = req.session.userName;
  }
  next();
};
module.exports = { checkUser, deeper, welcomeUser };
