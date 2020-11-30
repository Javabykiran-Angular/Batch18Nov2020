
import {Employee} from './employee';
import {Department} from './department';
export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    //Department ref
    deptRef:Department;

    constructor(firstname:string,lname:string,salary:number,role:string){
        this.fname=firstname;
        this.lname=lname;
        this.salary=salary;
        this.deptRef=new Department(role);
    }

    display() {
        console.log(`
        ---------Employee Details---------------
            First Name :: ${this.fname}
            last Name :: ${this.lname}
            Salary ::   ${this.salary}
            Role ::     ${this.deptRef.getRole()}
        `);
        
    }
    
}