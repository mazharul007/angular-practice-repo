import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  template:'<h2>Admin Component</h2><h3>{{"Admin Name : " + getAdminName()}}</h3>',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminName = "Mr. X";

  getAdminName(){
    return this.adminName;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
