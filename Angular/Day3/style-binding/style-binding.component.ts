import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=2;
  mycolor2="green";

  myobj={
    color:'red',
    fontStyle:'italic'
  };
  

  constructor() { }

  ngOnInit() {
  }

}
