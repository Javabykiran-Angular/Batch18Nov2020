import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  posts:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;
  
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

    },(error)=>{
      
      alert('Unavailable Server or Wrong Url');
    });
  }

  OnSendData(mytitle,mybody){

    let obj={
      title:mytitle,
      body:mybody
    };
    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    });
  }

  onUpdate(item){
    this.ishidden=false;
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
  }

  OnFinalUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdatePostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })


  }

  OnDelete(id){
    this.service.DeletePostData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }


}
