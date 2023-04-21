const jwt=require('jsonwebtoken')
const userConfig=require('../config/user.config.js');
const isValideToken=async(req,res,next)=>{
    const headers=req.headers['x-access-token'];
    if(!headers){
        return res.status(403).send({
            message:"Token not provided!"
        })
    }
    jwt.verify(headers,userConfig.secret,(err,decode)=>{
        if(err){
            return res.status(401).send({
                message:"Unauthorized"
            })
        }
        req.body.email=decode.email
        next();
    })
}

module.exports={
    isValideToken:isValideToken
}