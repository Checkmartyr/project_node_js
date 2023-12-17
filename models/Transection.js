const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransectionSchema  = new  Schema(
    {
        buyyer:{
            type: String
        },
        seller:{
            type: String
        },
        DrawingID:{
            type: String    
        },
        price:{
            type: Number
        },
        crateDate:{
            type: Date,
            default: Date.now()
        }

    }

)

const Transection = mongoose.model('Transection', TransectionSchema)
module.exports = Transection