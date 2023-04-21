const Users=require('../Models/user.model')
const bcrypt=require('bcryptjs')
const config=require('../config/user.config')
const jwt=require('jsonwebtoken')
exports.signup=async(req,res)=>{
        
        let singupObj={
            email:req.body.email,
            name:req.body.name,
            password:bcrypt.hashSync(req.body.password, 8),
            phone:req.body.phone,
            salary:req.body.salary,
            status:req.body.status
        }
        if(!singupObj.email){
            return res.status(400).send({
                message:"email is not provided!"
            })
        }
        if(!singupObj.name){
            return res.status(400).send({
                message:"name is not provide!"
            })
        }
        if(!singupObj.password){
            return res.status(400).send({
                message:"password is not provided!"
            })
        }
        if(!singupObj.salary){
            return res.status(400).send({
                message:"salary is not provided!"
            })
        }
        if(!singupObj.phone){
            return res.status(400).send({
                message:"phone number is not proived"
            })
        }
        let user=await User.findOne({
            email:singupObj.email
        })
        if(user){
            return res.status(200).send({
                message:"Email is already exist!"
            })
        }
        try {
            let user=await User.create(singupObj);
            res.status(200).send({
                message:"SignUp successfully!!",
                status:true,
                data:user,
            })
            
        } catch (error) {
            res.status(500).send({
                message:"Something went worng",
                status:false,
                data:error.message
            })
        }

}

exports.signin=async(req,res)=>{

    let signinObj={
        email:req.body.email,
        password:req.body.password
    }
    if(!signinObj.email){
        return res.status(402).send({
            message:"email is not provided!"
        })
    }
    if(!signinObj.password){
        return res.status(402).send({
            message:"Password is not provided!"
        })
    }
    try{
     
            let user=await User.findOne({
            email:signinObj.email
         })
        if(!user){
            return res.status(400).send({
                message:"User is not found please signup once then login!"
            })
        }
        //is password is valid or not 
        let isPasswordValid=bcrypt.compareSync(signinObj.password,user.password) 
        if(!isPasswordValid){
            return res.status(401).send({
                message:"Invalid Password! "
            })
        }
        //generate jwt
        let token=jwt.sign({email:user.email},config.secret,{
            expiresIn:86400
        })
        res.status(200).send({
            message:"SignIn successfully",
            status:true,
            data:user,
            accessToken:token
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went worng",
            status:false,
            ErrorMessage:error.message
        })
    }
    
}