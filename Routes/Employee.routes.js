const EmployeeController=require('../Controllers/employee.controller');

module.exports=function(app){
    app.put('/tb/api/employee/:id',EmployeeController.update);
    app.get('/tb/api/Employee/:id',EmployeeController.getEmpoloyee);
    app.get('/tb/api/Employee',EmployeeController.CalculateEmpoyeeTax);
}