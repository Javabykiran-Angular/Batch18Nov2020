import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrapdemo',
  templateUrl: './bootstrapdemo.component.html',
  styleUrls: ['./bootstrapdemo.component.css']
})
export class BootstrapdemoComponent implements OnInit {

  arrobj=[
    {
      name:'Sumit Raokhande',
      id:1,
      role:'Developer',
      status:'Active'
    },
    {
      name:'Kiran Raokhande',
      id:11,
      role:'Admin',
      status:'InActive'
    },
    {
      name:'Spruha Raokhande',
      id:12,
      role:'HR',
      status:'Active'
    },
    {
      name:'Suman Raokhande',
      id:13,
      role:'Networking',
      status:'Suspend'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
