const Empolyee=require('../Models/user.model')

exports.update=async(data)=>{

    try {
        if(data.email || data.password){
            return;
        }
        const user=await Empolyee.findByIdAndUpdate(data._id,data,{new:true}).exec();
        return user;
        
    } catch (error) {
        return error;
    }
}

exports.getEmpolyee=async(id)=>{
    try {
        
        let user=await Empolyee.findById(id).exec();
        return user;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}
