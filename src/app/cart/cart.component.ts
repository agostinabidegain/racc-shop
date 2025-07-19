import { Component } from '@angular/core';
import {NecklaceCartService} from '../necklace-cart.service';
import {Necklace} from '../necklace-list/Necklace';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Necklace[]>;

  constructor(private cart: NecklaceCartService) {
    this.cartList$ = cart.cartList.asObservable()
  }
}
