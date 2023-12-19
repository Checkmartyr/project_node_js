
const Comment = require('../models/Comment')

module.exports = (req,res)=>{
    console.log("req.body",req.body);
    console.log("req.query",req.query);
    console.log("req.params",req.params);
    
    Comment.create({commentText:req.body.commentText, author:req.query.author,Drawing:req.params.id}).catch((error)=>{
        console.log(error)
    })

    res.redirect(`/manu`)

}