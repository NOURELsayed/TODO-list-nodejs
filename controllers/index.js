
const indexHandler = (req, res) => {
    res.render('login')
}

const logHandler = async (req,res)=>{
    res.render('index',{userinfo:req.user})
}

  module.exports = {
    indexHandler,
    logHandler
  }