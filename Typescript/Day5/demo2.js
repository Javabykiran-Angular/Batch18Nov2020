//Array
var a = [2, 3, 4, 5];
var a1 = [2, 3, 4, 5];
var a2 = ['Angular 8', 'React js', 'Jsp'];
var a3 = [];
var a4 = [];
// for(let i=0;i<a.length;i++){
//     console.log(`
//     --------------------
//         value of a[${i}] is ${a[i]}
//     `);
// }
// console.log("Array is "+a);
// console.log("Array "+a.join("   "));
// console.log("Array "+a.join(" @"));
// a.forEach((myvalue,myindex)=>{
//     console.log(myvalue);
//     console.log("Index is "+myindex);
// });
//Rest parameter Function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("==================\n            Value of Item is " + item + "\n    ");
}
display(22, 33);
display(55, 66, 77, 88, 99);
