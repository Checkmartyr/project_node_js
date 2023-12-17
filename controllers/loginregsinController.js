const e = require("connect-flash");

module.exports = (req,res)=>{
    // console.log({
    //     errors : req.flash('validationErrors'),
    //     data : req.flash('data')
    // });

    let errors = req.flash('validationErrors')
    // console.log(Object.keys(errors).length === 0);
    res.render('login',{
        errors : errors,
        data : req.flash('data'),
        active : Object.keys(errors).length === 0,
        passworderror : req.flash('passworderror'),
        emailerror : req.flash('emailerror')
    })  
}