import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  myobj={
    myid:0,
    myfname:'',
    mylname:''
  }

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){
      this.routes.queryParamMap
      .subscribe((queryparam)=>{
        this.myobj.myfname=queryparam.get('fname');
        this.myobj.mylname=queryparam.get('lname');
        this.myobj.myid=+queryparam.get('id');
      })
  }

}
