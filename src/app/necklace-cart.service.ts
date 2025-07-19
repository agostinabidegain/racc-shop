import { Injectable } from '@angular/core';
import {Necklace} from './necklace-list/Necklace';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//maneja logica del carrito
export class NecklaceCartService {
  private _cartList: Necklace[] = [];

  // @ts-ignore
  cartList: BehaviorSubject<Necklace[]> = new BehaviorSubject([]);

  constructor() {
  }

  addToCart(necklace: Necklace) {
    let item: Necklace = <Necklace>this._cartList.find((v1) => v1.name == necklace.name);
    if(!item) {
      this._cartList.push({... necklace});
    } else {
      item.quantity += necklace.quantity;
    }

    console.log(this._cartList.length);
    this.cartList.next(this._cartList);
  }
}
