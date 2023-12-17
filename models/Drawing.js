const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DrawingSchema  = new  Schema(
    {
        DrawBy:{
            type: String
        },
        Owner:{
            type: String
        },
        title:{
            type: String    
        },
        price:{
            type: Number
        },
        description:{
            type: String
        },
        filePath:{
            type: String
        },
        category:{
            type: String
        },
        crateDate:{
            type: Date,
            default: Date.now()
        }

    }

)

const Drawing = mongoose.model('Drawing', DrawingSchema)
module.exports = Drawing