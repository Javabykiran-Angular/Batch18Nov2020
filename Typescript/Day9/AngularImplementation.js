var AngularClass = /** @class */ (function () {
    function AngularClass(fname, lname, id) {
        this.fname = fname;
        this.lname = lname;
    }
    AngularClass.prototype.display = function () {
        console.log("\n        -----------------Details------------\n            First name :: " + this.fname + "\n            lname:         " + this.lname + "\n        ");
    };
    return AngularClass;
}());
var obj = new AngularClass('sumit', 'Angular', 3);
obj.display();
