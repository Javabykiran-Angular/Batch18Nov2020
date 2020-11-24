//Optional Parameter Function
//first we apply optional paramter function to function with argument & without Return Type
function add(a, b, c) {
    console.log("\n        Value of A is " + a + "\n        Value of B is " + b + "\n        Addition of A+B is " + (a + b) + "\n    ");
}
//add(2,3);
//add(4);
// add();
//add(7)
var temp = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp(6,6));
//Default Parameter Function
function add2(a, b, c) {
    if (b === void 0) { b = 5; }
    console.log("\n        Value of A is " + a + "\n        Value of B is " + b + "\n        Addition of A+B is " + (a + b) + "\n    ");
}
// add2(2);
add2(3, 8);
