const User = require('../models/User')
const Drawing = require('../models/Drawing')

module.exports =  async (req, res) => {
    let UserData = await User.findById(req.session.userId)
    const did = await Drawing.findById(req.params.id)
    // console.log("did");
    // console.log(did);
    res.render('products',{UserData, did})
    
}
