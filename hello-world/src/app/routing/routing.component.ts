import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  public listOfEmployees=[];
  constructor(private _listService : ListService) { }

  ngOnInit(): void {
     this._listService.getEmployees()
         .subscribe(data => this.listOfEmployees = data);
  }

}
