import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {

 @Input("isSelected") isFavorite : boolean;
 @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }

}
