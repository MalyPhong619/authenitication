import { Component, OnInit } from '@angular/core';
import { SHOES } from '../mock-shoes';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent{
 shoes = SHOES;
  constructor() { }

  ngOnInit() {
  }

  goToShoeDetailPage(param) {
    
  }

}
