"use strict";
exports.__esModule = true;
exports.pi = exports.Multiplication = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    // constructor(){
    //     this.lname='';
    //     this.fname='';
    //     this.id=0;
    // }
    function Myclass(firstname, lastname, ID) {
        this.fname = firstname;
        this.lname = lastname;
        this.id = ID;
    }
    Myclass.prototype.display = function () {
        console.log("\n        -----------Full Details--------------------\n        First name:: " + this.fname + "\n        Last Name :: " + this.lname + "\n        id is ::     " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// var obj=new Myclass('Sumit','Raokhande',2);
// obj.lname="JavabyKiran";
// obj.display();
function Multiplication(a, b) {
    return (a * b);
}
exports.Multiplication = Multiplication;
exports.pi = 3.14;
