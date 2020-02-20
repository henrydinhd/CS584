var employees = [];
var employeeId = Math.floor(Math.random()*1000000000);
var firstName = document.getElementByName('firstName').value;
var lastName = document.getElementByName('firstName').value;
var department = document.getElementByName('firstName').value;
var info = JSON.parse('{"name":"John Doe", "department":"IT", "ID":00004505}');
var employee = {
    "firstname": firstName,
    "lastname": lastName,
    "department" : department,
    "employeeId" : employeeId
};

for (var i = 0 ; i<employees.length; i++){
    if (employees[i].employeeId == employeeId){
        console.log("Employee already exists");
    }
    else{
        employees.push(employee);
    }
}

function outPut(){
document.getElementById('ListOfEmployees').innerHTML = "List of Employees";
document.getElementById('fullname').innerHTML = "Employee" + firstName + " " + lastName;
document.getElementById('department').innerHTML = "Department " + department;
document.getElementById('employeeId').innerHTML = "Employee ID" + employeeId;
}



