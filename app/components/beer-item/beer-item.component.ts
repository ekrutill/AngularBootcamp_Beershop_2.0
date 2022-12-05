import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit {

  @Input() beer?: Beer;
  @Input() name?: string;
  @Input() image_url?: string;

  @Input() tagline?: string;
  @Input() contributor?: string;
  @Input() price?: number;

  counterForm: FormGroup;

  constructor(fb: FormBuilder, public beerService: BeerService, public router: Router) {
    this.counterForm = fb.group({
      quantity: ['']
    })
  }

  ngOnInit(): void {
  }

  get quantity(): FormControl{
    return this.counterForm.get('quantity') as FormControl
  }

  selectedBeer(beer: Beer){
    this.router.navigate(['/details', {id: beer.id}])
    this.beerService.selectedBeer = beer;
  }

  addToCart(beer: Beer){
    for(let i = 0; i < this.quantity.value; i++){
      this.beerService.shoppingCart.push(beer);
    }
    //check if it's in the shopping cart:
    console.log(this.beerService.shoppingCart);

  }


  addToWishlist(beer: Beer){
      this.beerService.wishlist.push(beer);

    //check if it's in the wishlist:
    console.log(this.beerService.wishlist);
  }

  

}
