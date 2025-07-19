import { Component } from '@angular/core';
import {Necklace} from './Necklace';
import {NecklaceCartService} from '../necklace-cart.service';
import {NecklaceDataService} from '../necklace-data.service';


@Component({
  selector: 'app-necklace-list',
  standalone: false,
  templateUrl: './necklace-list.component.html',
  styleUrl: './necklace-list.component.scss'
})
export class NecklaceListComponent {

  constructor(
    private cart: NecklaceCartService,
    private necklaceDataService: NecklaceDataService) {
  }

  necklaces: Necklace[] = [
    {
      name : "R49",
      color : "Plateado - Gris",
      price : 8500,
      stock : 2,
      image : "/assets/img/r49.jpg",
      clearance : false,
      quantity : 0,
    },
    {
      name : "R47",
      color : "Plateado",
      price : 7500,
      stock : 30,
      image : "/assets/img/r47.jpg",
      clearance : true,
      quantity : 0,
    },
    {
      name : "R50",
      color : "Negro - Plateado",
      price : 7800,
      stock : 0,
      image : "/assets/img/r50.jpg",
      clearance : false,
      quantity : 0,
    },
    {
      name : "R49",
      color : "Plateado - Gris",
      price : 8500,
      stock : 2,
      image : "/assets/img/r49.jpg",
      clearance : false,
      quantity : 0,
    },
    {
      name : "R47",
      color : "Plateado",
      price : 7500,
      stock : 30,
      image : "/assets/img/r47.jpg",
      clearance : true,
      quantity : 0,
    },
    {
      name : "R50",
      color : "Negro - Plateado",
      price : 7800,
      stock : 0,
      image : "/assets/img/r50.jpg",
      clearance : false,
      quantity : 0,
    },
  ]

  addToCart(necklace: Necklace) : void {
    this.cart.addToCart(necklace)
    necklace.stock -= necklace.quantity;
    necklace.quantity = 0;

  }

  maxReached(m: string) {
    alert(m);
  }
}
