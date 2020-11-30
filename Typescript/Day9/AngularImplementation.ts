
class AngularClass{

    constructor(private fname:string,public lname:string,id:number){

    }

    display(){
        console.log(`
        -----------------Details------------
            First name :: ${this.fname}
            lname:         ${this.lname}
        `);
    }


}

var obj=new AngularClass('sumit','Angular',3);
obj.display();