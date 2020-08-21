import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items:any;
filterData;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
   this.items =  this.cartService.fetch();
   console.log(this.items);
   this.checkSearch();
  }

  addToCart(item){
    this.cartService.updatecart(item);
  }

  checkSearch(){
    this.cartService.search$.subscribe(val => {
      // console.log(val);
      if(val==''){
        this.filterData = this.items;
      }else{
        this.filterData = this.items.filter(x => 
          x.name.trim().toLowerCase().includes(val.trim().toLowerCase()));
     };
    });  
    
}
}
