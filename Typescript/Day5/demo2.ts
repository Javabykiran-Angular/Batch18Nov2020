//Array

var a=[2,3,4,5];
var a1:number[]=[2,3,4,5];
var a2:string[]=['Angular 8','React js','Jsp'];
var a3=[];
var a4:number[]=[];

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

function display(...item:number[]){
    console.log(`==================
            Value of Item is ${item}
    `);
}

display(22,33);
display(55,66,77,88,99);




