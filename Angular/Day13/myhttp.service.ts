import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  url:string="https://jsonplaceholder.typicode.com/post";
  constructor(private http:HttpClient) { }

  getpost(){
    return (this.http.get(this.url));
  }

  PostData(obj){
   return (this.http.post(this.url,obj));
  }

  UpdatePostData(obj){
    return  (this.http.put(this.url+"/"+obj.id,obj));
  }

  DeletePostData(id){
    return (this.http.delete(`${this.url}/${id}`));

  }





}
