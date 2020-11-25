
var arr1:number[]=[];
//we can insert value using Push & pop Method
//It works On LIFO principle that basically implement for stack

arr1.push(10);
// console.log(arr1);
arr1.push(11,12,13);
// console.log(arr1);
var temp=arr1.pop();
// console.log("Poped Value is "+temp);
// console.log(arr1);

//Splice function to add & remove or replace data a particular position/index
// var arr=[10,11,12,13,14];
// console.log("Original Array "+arr);
// arr.splice(1,0,21);
// console.log(arr);
// arr.splice(2,0,22,23,24);
// console.log(arr);
// arr.splice(6,1);
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);
// //replace a data
// arr.splice(0,1,30);
// console.log(arr);
// arr.splice(1,3,44,55,66);
// console.log(arr);


//Slice Function 
// To copy of section of array
var arr2=[10,20,30,40,50];
// var temp1=arr2.slice(1,4)
// console.log("Original arr "+arr2);
// console.log("Copied arr "+temp1);
// var temp2=arr2.slice();
// console.log("===Original arr "+arr2);
// console.log("===Copied arr "+temp2);

//map function
var arr4=[2,3,4,5];
var result=arr4.map((value)=>{
    return (value*value);
})
console.log("Original Arr "+arr4);
console.log("Result Arr "+result);



