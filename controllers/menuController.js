const User = require('../models/User')
const Drawing = require('../models/Drawing')


module.exports = async (req,res)=>{
    let UserData = await User.findById(req.session.userId)
    let post = await Drawing.find({}).populate('crateDate').sort({crateDate:'desc'})
    console.log(post);
    res.render("manu",{UserData,Post:post})
}