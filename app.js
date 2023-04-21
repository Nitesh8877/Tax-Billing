const express=require('express');
const mongoose=require('mongoose');
const DB=require('./Config/server.config')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect(DB.DB_URL);

app.get('/',(req,res)=>{
    return res.send({
        message:"hello"
    })
}

)
require('./Routes/user.routes')(app)
require('./Routes/Employee.routes')(app);
app.listen(7500,()=>{
    console.log("Server Started succefully ", 7500)
})

