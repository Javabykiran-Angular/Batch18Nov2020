import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  myclass2:string='warning';
  rating:number=2;
  iserror:boolean=false;
  objclass={
    "success":this.iserror,
    "danger" :!this.iserror,
    "special" :true
  }
  constructor() { }

  ngOnInit() {
  }

}
