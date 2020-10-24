import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  courses=[1,2,3];

  viewMode ="map";

  courseInfo=[
    {id:1, name:'DLD'},
    {id:2, name:'OOP'},
    {id:3, name:'OS'},
    {id:4, name:'EM'},
  ] 

  onAdd(){
    this.courseInfo.push({id:5,name:"ACC"})
  }
  onRemove(courses){
    let index =this.courseInfo.indexOf(courses);
    this.courseInfo.splice(index,1);
  }

  customerList;
  loadCustomerNames(){
    this.customerList=[
      {id:1, name:'x'},
      {id:2, name:'y'},
      {id:3, name:'z'},
    ]
  }

  trackCustomer(customer){
    return customer ? customer.id : undefined;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
