import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-installation-test',
  templateUrl: './bootstrap-installation-test.component.html',
  styleUrls: ['./bootstrap-installation-test.component.css']
})
export class BootstrapInstallationTestComponent implements OnInit {

  public isActive:boolean= false;

  onClick($event){

    $event.stopPropagation(); // to stop event bubbling
    console.log("Button was clicked" + $event);
  }
  onDivClick(){
    console.log("Div was clicked too!");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
