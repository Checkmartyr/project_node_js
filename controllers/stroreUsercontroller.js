const User =require("../models/User")


module.exports = (req,res)=>{
    console.log(req.body);

    User.create(req.body).then( async () =>{
        console.log("Success Register")
        res.redirect("/")
    }).catch((error)=>{
        console.log("Error Register")

        if (error) {
            console.log(error.message);
            const validationErrors = error.message
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/login_or_register')
        }
        
    }
    )
}