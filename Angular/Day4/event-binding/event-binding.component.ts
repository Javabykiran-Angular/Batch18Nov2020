import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:boolean=true;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

  onclick(){
    if(this.count){
      console.log("Click Event Occur!!!");
      this.count=false;
    }
   
  }

  onclick1(){
    this.name='Sumit Raokhande';

  }

}
