import {Component, Input} from '@angular/core';
import {Necklace} from '../necklace-list/Necklace';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
 @Input()
  quantity!: number;

 @Input()
 max!: number;

 @Output()
 quantityChange : EventEmitter<number> = new EventEmitter<number>();

 @Output()
 maxReached : EventEmitter<string> = new EventEmitter<string>();

  upQuantity() : void{
    if(this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit('se alcanzo el max');
    }
  }
  downQuantity() : void{
    if(this.quantity >0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  changeQuantity(event : Event): void {
    console.error(event);
    this.quantityChange.emit(this.quantity);
  }
}
