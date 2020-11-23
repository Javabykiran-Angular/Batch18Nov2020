//Function 4 basics type 
// 1 Function without argument & without return
// 2 Function without argument & with return type
// 3 Function with argument & without return
// 4 Function with argument & with return type

function add(){
   console.log("Function without argument & without return"); 
}


// add();

function add1():number{
    return (5+5);
}
var temp=add1();
// console.log("value of temp is "+temp);

function add2(){
    return (4+4);
}
// console.log(" result is "+add2());

function add4(a:number,b:number){
    console.log("Addition is "+(a+b));
}

// add4(2,3)

function add5(a:number,b:number){
    return (a+b);
}

// console.log(`----------------------------------
//         Addition is ${add5(8,8)}
// `);

//Anonymous Function

  var temp1=function (){
        console.log("Basic Anonymous function is called....");
    }

    temp1();

   var temp2=function (a:number,b:number):number{
       return (a+b);
   } 

   console.log(`=========================
   Anonymous Function with return type & with argument
            ${temp2(11,11)}
   `)

   // Fat Arrow Function/Arrow function

   var temp3=()=>{
    console.log("Basic type of Fat Arrow Function");
    }

    temp3();

    var temp4=(a:number,b:number):number =>{
        return (a+b);
    }
    
    console.log("Fat Arrow Function with Argument & with Return Type "+temp4(7,7));

  






