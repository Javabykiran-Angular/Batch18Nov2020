import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  myid:number=0;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
this.GetDataFromURL();

  }

  GetDataFromURL(){
    this.routes.paramMap
    .subscribe((param)=>{
     this.myid=+param.get('id');
    })
  }

}
