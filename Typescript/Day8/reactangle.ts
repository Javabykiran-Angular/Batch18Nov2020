
import {Shape} from './Shape';

export class Rectangle extends Shape{
    length:number;
    breadth:number;
    area:number;
    
    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breadth=b
    }
    
    Myarea(){
        this.area=this.length*this.breadth;
    }

    display(){
        console.log(`
        --------------reactangle area--------------
            Length is ${this.length}
            breadth is ${this.breadth}
            Area is ${this.area}
        `);
    }

}