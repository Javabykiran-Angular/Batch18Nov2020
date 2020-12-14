import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  Search:string='';
  tempEmpdata:any[]=[
    {
      id:1,
      name:'sumit',
      departmentit:'IT',
      status:'Active',
      phoneno:9960556397,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:2,
      name:'Kiran',
      departmentit:'Marketing',
      status:'Active',
      phoneno:9960558956,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit1',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    }, {
      id:3,
      name:'Spruha',
      departmentit:'Administrative',
      status:'InActive',
      phoneno:8087556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:4,
      name:'Amit',
      departmentit:'IT',
      status:'InActive',
      phoneno:9960789397,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Kiran',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:5,
      name:'Nilam',
      departmentit:'Account',
      status:'Active',
      phoneno:8460556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:6,
      name:'Pratiksha',
      departmentit:'Development',
      status:'Active',
      phoneno:9960556032,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:88,
      name:'XYZ1',
      departmentit:'Networking',
      status:'Active',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:77,
      name:'PQR',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556038,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:70,
      name:'XYZ12',
      departmentit:'Marketing',
      status:'InActive',
      phoneno:9978556032,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
