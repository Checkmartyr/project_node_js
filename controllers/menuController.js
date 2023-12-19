const User = require('../models/User')
const Drawing = require('../models/Drawing')
const Comment = require('../models/Comment')

module.exports = async (req,res)=>{
    let UserData = await User.findById(req.session.userId)
    let allUserData = await User.find({})
        
    // let username = User.username
    let posts = await Drawing.find({}).populate('crateDate').sort({crateDate:'desc'})
    

    
    let comments = {}
    if(UserData){
        // console.log(findname(req.session.userId));
    }
    for (let post of posts){

        let comment= await Comment.find( {Drawing : post._id})
        comments[post._id] = {comment}
    }
    console.log();
    console.log(comments['657ece47eb8cbe5284e19823'].comment)

    
    res.render("manu",{UserData,Post:posts,allUserData,comments})
}