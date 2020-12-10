import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg:string='Data Send From Parent to Child';
  arrobj=[
    {
      name:"Sumit Raokhande",
      id:2,
      desigation:'Developer'
    },
    {
      name:"Kiran Raokhande",
      id:3,
      desigation:'Dev Ops'
    },
    {
      name:"Spruha Raokhande",
      id:1,
      desigation:'Administartor'
    }
  ];

fromchild;
  constructor() { }

  ngOnInit() {
  }

}
