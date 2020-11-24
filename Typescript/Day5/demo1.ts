//Optional Parameter Function

//first we apply optional paramter function to function with argument & without Return Type

function add(a:number,b?:number,c?:number){
    console.log(`
        Value of A is ${a}
        Value of B is ${b}
        Addition of A+B is ${a+b}
    `)
}

//add(2,3);
//add(4);
// add();
//add(7)

var temp=(a:number,b?:number)=>{

    return (a+b);
}

// console.log("Addition is "+temp(6,6));

//Default Parameter Function

function add2(a:number,b:number=5,c?:number){
    console.log(`
        Value of A is ${a}
        Value of B is ${b}
        Addition of A+B is ${a+b}
    `)
}

// add2(2);
// add2(3,8,4);


function add3(a:number,b?:number,c?:number){
    console.log(`
        Value of A is ${a}
        Value of B is ${b}
        Addition of A+B is ${a+b}
    `)
}


