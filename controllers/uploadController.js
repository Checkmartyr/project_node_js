
const User = require('../models/User')
const Drawing = require('../models/Drawing')

module.exports =  async (req,res)=>{
    // console.log(req.body);
    // console.log(req.file.path);

    try {
        let filePath = req.file.path;
        const userId = req.session.userId;
    
        if (!filePath) {
          throw new Error('File not uploaded successfully');
        }
        // re format filePath to remove public from the path
        filePath = filePath.replace('public', '');
        // update the user with the file path
        console.log(filePath);
        const result = await User.findByIdAndUpdate(
            req.session.userId,
            { filePath : filePath },
            { new: true }
          );
        console.log(req.body);
        Drawing.create({filePath: filePath, DrawBy: userId,title:req.body.title,description:req.body.detail,price:req.body.price,category:req.body.type})


        if (!result) {
          throw new Error('User not found');
        }
        
        console.log('File path inserted into the database for user:', result.id, result.filePath);
    } catch (error) {
        console.error('Error while updating user with file path:', error.message);
    }
    
    res.redirect('/');
}  