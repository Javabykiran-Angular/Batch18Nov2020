import {Shape} from './Shape';

export class Circle extends Shape{

    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }

    Myarea(){
        this.area=this.radius*this.radius*3.14;
    }

    display(){
        console.log(`
            ---------Circle Area---------------
            Radius is ${this.radius}
            Area is ${this.area}
            --------------------------------
        `);
    }

}