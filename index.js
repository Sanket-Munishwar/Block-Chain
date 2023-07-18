const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser = require('body-parser')

const route=require("./src/routes/route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://sanketmunishwar7:q5WEY4lK4vMAzwbJ@cluster0.0jenlvx.mongodb.net/Crypto?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>{
    console.log("mongo is connected")
}).catch((error)=>{
    console.log(error)
})



app.use('/',route)


app.listen(3000,()=>{
    console.log("express is running on port 3002")
})