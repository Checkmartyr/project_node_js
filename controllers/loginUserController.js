const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { email, password } = req.body 
    console.log(req.body)

    User.findOne({ email: email }).then((user) => {
        // console.log({email: email,passwrod:user.password})
        // console.log(bcrypt.hash(password));
        
        if (user) {
            let cmp = bcrypt.compare(password, user.password).then((match) => {
                if (match) {
                    req.session.userId = user._id
                    res.redirect('/')

                } else {
                    req.flash('passworderror', 'Incorrect Password')
                    res.redirect('/login_or_register')
                    
                    // const warpper = document.querySelector('.warpper');
                    // warpper.classList.remove('active');
                }
            })
        } else {
            req.flash('emailerror', 'Email does not exist')
            res.redirect('/login_or_register')
        }
    })
}