
const request = require('request')
const myFunction = (req,res, next)=>{
    try {
        const options = {
            'method':"GET",
            'url':"https://api.coincap.io/v2/assets",
            'headers':{Authorization:"Bearer c9cf1563-cb32-4efd-9385-5df625701f2a"
            }
        }
        request(options,function(error,response){
            if(error) throw new Error(error) 
            req.mydata=response.body
            next()
        })
    } catch (error) {
        return res.status(500).send({status:false, message:error.message})
    }
}

module.exports={myFunction}