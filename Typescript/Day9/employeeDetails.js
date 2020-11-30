"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(firstname, lname, salary, role) {
        this.fname = firstname;
        this.lname = lname;
        this.salary = salary;
        this.deptRef = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n        ---------Employee Details---------------\n            First Name :: " + this.fname + "\n            last Name :: " + this.lname + "\n            Salary ::   " + this.salary + "\n            Role ::     " + this.deptRef.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
