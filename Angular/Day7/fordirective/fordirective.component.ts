import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React JS','Vue Js','Embber Js','JSP'];

  prodDetails=[
    {
      prodname:'Samsung',
      description:'Good Product',
      quantity:2,
      price:10000
    },
    {
      prodname:'Motorolla',
      description:'Excllent Product',
      quantity:1,
      price:15000
    },
    {
      prodname:'LG',
      description:'Lifes Good Product',
      quantity:4,
      price:30000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
