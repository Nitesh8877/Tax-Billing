const UserController=require('../controllers/user.controller');

module.exports=function(app){
    app.post('/tb/api/signup',UserController.signup);
    app.post('/tb/api/signin',UserController.signin);
    
}