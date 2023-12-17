const User = require('../models/User')
const Drawing = require('../models/Drawing')


module.exports = async (req,res)=>{
    let UserData = await User.findById(req.session.userId)
    let post = await Drawing.find({}).sort({crateDate:'desc'})
    // console.log(post.owner);
    res.render("index",{UserData,Post:post})
}
