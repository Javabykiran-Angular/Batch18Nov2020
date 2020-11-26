class Myclass{
  private fname:string;//property
  public  lname:string; //property
  protected  id:number; //property

    // constructor(){
    //     this.lname='';
    //     this.fname='';
    //     this.id=0;
    // }

    constructor(firstname:string,lastname:string,ID:number){
        this.fname=firstname;
        this.lname=lastname;
        this.id=ID;
    }

    display(){
        console.log(`
        -----------Full Details--------------------
        First name:: ${this.fname}
        Last Name :: ${this.lname}
        id is ::     ${this.id}
        `);
    }

}

var obj=new Myclass('Sumit','Raokhande',2);
obj.lname="JavabyKiran";
obj.display();




