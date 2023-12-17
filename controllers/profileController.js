const User = require('../models/User')
const Drawing = require('../models/Drawing')

module.exports = async (req,res)=>{
    // const buyid =  await User.findById(req.session.userId)
    // // const did = await Drawing.findById(req.params.buyID)
    // // const seller = await User.findById(did.DrawBy)
    let UserData = await User.findById(req.session.userId)
    const myBoughtDrawing = await Drawing.find({Owner:req.session.userId})
    const myDrawing = await Drawing.find({DrawBy:req.session.userId})
    console.log("myBoughtDrawing"+ myBoughtDrawing);
    console.log("===============================");
    console.log("mytDrawing"+myDrawing);
    res.render('profile',{UserData,
        myBoughtDrawing,
        myDrawing
    })
    
//     const buyid =  await User.findById(req.session.userId)
//     const did = await Drawing.findById(req.params.buyID)
//     const seller = await User.findById(did.DrawBy)
    
    
//     console.log(buyid.username))
//     res.send(buyid.username + " want to buy image form  " + seller.username)

//     const result = await Drawing.findByIdAndUpdate(req.params.buyID, { $push: { Owner: buyid._id } }, { new: true });
        
//     if (!result) {
//         throw new Error('User not found');
//       }
        
//     console.log("buy successful");
}