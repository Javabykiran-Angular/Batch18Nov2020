import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

   title:string='Hopes so you are enjoying This Lecture!!!';
   imgUrl:string='../../assets/Desert.jpg';


  constructor() { }

  ngOnInit() {
  }

}
