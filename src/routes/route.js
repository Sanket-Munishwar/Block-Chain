const express=require('express')
const router=express.Router();
const controller=require('../controller/getdata')
const data=require('../middlewares/middleware')

router.get('/assets',data.myFunction,controller.myapi)





module.exports=router