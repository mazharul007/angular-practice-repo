import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title = "Property binding";

  imageUrl = "https://picsum.photos/200";
  imageUrl2 = "https://picsum.photos/seed/picsum/200/300";
  constructor() { }

  ngOnInit(): void {
  }

}
