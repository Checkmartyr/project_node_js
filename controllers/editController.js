const User = require('../models/User')
const Drawing = require('../models/Drawing')

module.exports =  async (req, res) => {
    console.log(req.body);
    let UserData = await User.findById(req.session.userId)
    const did = await Drawing.findById(req.params.id)
    // console.log("did");
    // console.log(did);
    console.log(req.body);

    const update = await Drawing.findByIdAndUpdate(req.params.id, req.body)
    if (!update) {
        throw new Error('User not found');
      }
    console.log(update);

    res.redirect('/profile/req.session.userId')
    
    // res.render('products',{UserData, did})
    
}