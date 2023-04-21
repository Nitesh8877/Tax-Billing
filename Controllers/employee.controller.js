const UserServices=require('../Services/Empolyee.services');
const TaxCalculate=require('../Services/Tax.services');

exports.update=async(req,res)=>{
    try {
        let response=await UserServices.update(req.body);
        res.status(200).send({
            message:"Employee details update successfull",
            status:true,
            data:response
        })
        
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}

exports.getEmpoloyee=async(req,res)=>{
    try {

        let response=await UserServices.getEmpolyee(req.params.id);
        res.status(200).send({
            message:"Succefully get employee details",
            status:true,
            data:response
        })

    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
        
    }
}

exports.CalculateEmpoyeeTax=async(req,res)=>{
    try {
            let response=await TaxCalculate.calculateTax(req.body);
            res.status(200).send({
                message:"Tax calculate",
                status:true,
                Tax:response
            })
    } catch (error) {
        res.status(500).send({
            message:"Something went wrong",
            status:false,
            ErrorMessage:error.message
        })
    }
}