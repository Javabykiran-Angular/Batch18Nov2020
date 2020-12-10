import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() datafromchild =new EventEmitter();

  childmsg:string='Data From Child';
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.datafromchild.emit(this.childmsg);
  }

}
