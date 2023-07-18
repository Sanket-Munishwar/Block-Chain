const mongoose = require("mongoose")

const coinSchema = new mongoose.Schema({
    symbol:{
        type:String,
        //Unique:true
    }, // String and Unique
    name:{
        type:String,
        //Unique:true
    }, // String and Unique
    marketCapUsd:{type:String}, // String  ( not Number)
    priceUsd:{type:String} //String

})

module.exports = mongoose.model("crypto",coinSchema)