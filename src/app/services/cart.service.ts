import { Injectable } from '@angular/core';

import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
cartItem = [];
  data:any = [
    {
      id:1,
      name: 'item1',
      price: 175,
      discount: 5,
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'
      },
      {
      id:2,
      name: 'item2',
      price: 190,
      discount: 7,
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'
      },
      {
      id:3,
      name: 'item3',
      price: 213,
      discount: 20,
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'
      },
      {
      id:4,
      name: 'item4',
      price: 217,
      discount: 18,
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'
      },
       {
      id:5,
      name: 'item5',
      price: 319,
      discount: 31,
      img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'
      }
  ]

  fetch(){
    return this.data;
  }
  private cartValue = new Subject<number>();
  count$ = this.cartValue.asObservable();
  updatecart(item){
    this.cartItem.push(item);
    this.cartValue.next(this.cartItem.length);
  }
  
  private Value = new BehaviorSubject<any>('');
  search$ = this.Value.asObservable();
  showSearch(value){
    this.Value.next(value);

  }
}
