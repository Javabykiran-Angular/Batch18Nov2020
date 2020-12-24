import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(myform){
    console.log(myform.value);
    console.log(myform.value.username);
    console.log(myform.value.con);
  }

}
