import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post ={
    title:"title",
    isFavorite : true
  }
  onClickChange(){
    console.log("output properties worked!");
  }
  title = 'buildingReusableComponent';
}
