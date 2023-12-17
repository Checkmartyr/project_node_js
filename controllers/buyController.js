const User = require('../models/User')
const Drawing = require('../models/Drawing')
const Transection = require('../models/Transection')
// const { render } = require('ejs')

module.exports = async (req,res)=>{
    const buyid =  await User.findById(req.session.userId)
    const did = await Drawing.findById(req.params.buyID)
    const seller = await User.findById(did.DrawBy)
   
    
    // res.send(buyid.username + " want to buy image form  " + seller.username)
    
    const result = await Drawing.findByIdAndUpdate(req.params.buyID, { $set: { Owner: buyid._id } }, { new: true });
    const payment = await Transection.create({buyyer: buyid._id, seller: seller._id, DrawingID: did._id, price:did.price})    
    if (!result || !payment) {
        throw new Error('User not found');
      }
        
    console.log("buy successful");
    res.render("buy")
}   