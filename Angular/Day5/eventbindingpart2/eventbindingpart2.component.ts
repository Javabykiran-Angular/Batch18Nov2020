import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindingpart2',
  templateUrl: './eventbindingpart2.component.html',
  styleUrls: ['./eventbindingpart2.component.css']
})
export class Eventbindingpart2Component implements OnInit {

  twoway:string='';

  myobj={
    name:'',
    id:''
  }

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    console.log("Change event Occur!!!!");
  }
  onChange1(myevent){
    console.log(myevent);
    console.log(myevent.target.value);
  }
  onClick(myevent){
    console.log(myevent);
  }

  onGetData(input){
    console.log(input);
    console.log(input.value);
    input.style.background='red';
  }
  OnKeyUp(myvalue){
    console.log("Key Up Event Occur");
    console.log(myvalue);
  }
  onKeyDown(){
    console.log("Key Down Event Occur!!!!");
  }

}
