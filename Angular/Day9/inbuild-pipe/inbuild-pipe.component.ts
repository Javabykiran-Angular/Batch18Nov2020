import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  str:string="Hi welcome to Lecture";
  num1:number=65.678556;
  str1:string='javabykiran';
  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
