import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post ={
    title:"title",
    isFav : false
  }
  onClickChange(){
    console.log("output properties worked!");
  }
  title = 'buildingReusableComponent';
}
