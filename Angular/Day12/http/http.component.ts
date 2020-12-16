import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  posts:any[]=[];
  
  constructor(private service:MyhttpService) { }

  ngOnInit() {   
    this.getAllPost();
  }

  getAllPost(){
    this.service.getpost()
    .subscribe((response)=>{
     // console.log(response);
      this.posts=<any[]>response;
     // console.log(this.posts);

    });
  }




}
