
//operator
//airthematic(+,-,*,/,%),shift,logical(&&,||,<=,>=,!=,),assignment(=),bitwise(&,|,^,~,<<,>>),
//relation,preincrem/dec(++a,--a).,postince/dec(a++,a--)
//ternary(?:),conditional(conditional==,!=,<=,>= )

var a:number=1;
var b=23;
var str='Sumit';

var temp=a<4?'Condition true':'condition false';
//console.log("Value of temp is "+temp);
console.log("=========Loop================");
//loop
// if(a<4){
//     console.log("Condition is true");
// }

// if(a<4){
//     console.log("Use if-else Condition is true");
// }else{
//     console.log("Use if-else Condition is false");
// }

// if(a<4){
//     console.log("Use if-else-if a is less than 4");
// }else if(a>4){
//     console.log("Use if-else-if a is grater than 4");
// }else{
//     console.log("equal condition");
// }

//while loop
var b=5;
while(b!=0){
    console.log("value of b is "+b);
    b--; //b=b-1;
}
console.log("--------------for loop -------------------------");
for(var i=0;i<4;i++){
    console.log("value of I is "+i);
}
//foreach when we study array
//Switch
console.log("--------------Switch case -------------------------");
var choice=10;
switch(choice){
    case 1: console.log("You are in case 1");
            break;
    case 2: console.log("You are in case 2");
            break;
    default :console.log("You are in default case ");            
}











