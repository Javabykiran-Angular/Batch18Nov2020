import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service'

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {

  mycourse:string[]=[];
  constructor(private service:CourseService) { 
   // let service=new CourseService();
   // this.mycourse=service.getAllCourses();
   // console.log(this.mycourse.join(' '));
  }

  ngOnInit() {
    this.mycourse=this.service.getAllCourses();
  }

}
