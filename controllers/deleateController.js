const Drawing = require('../models/Drawing')


module.exports = async (req,res) =>{ 
    
    let DrawingId = req.params.id
    console.log(DrawingId);
    try {
        await Drawing.findByIdAndDelete(DrawingId);
        console.log('Drawing deleted');
        res.redirect('/');
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('An error occurred while deleting the drawing.');
    }
}
    

         