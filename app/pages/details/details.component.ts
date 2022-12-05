import { Beer } from 'src/app/models/beer-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // set arrays to shoppingCart:

  maltArray: string[] = [];
  hopsArray: string[] = [];
  yeastArray: string[] = [];
  beer!: Beer;

  //to show the modal message:
  isAddedToCart: boolean = false;

  counterForm: FormGroup;

  constructor(fb: FormBuilder, public beerService: BeerService) {
    this.counterForm = fb.group({
      quantity: ['']
    });
  }
  
  get quantity(): FormControl {
    return this.counterForm.get('quantity') as FormControl
  }
  
  deleteFromCart(){
    if (this.quantity.value > 0) {
      this.counterForm.reset();
    }
  }
  
  addUpToCart(){
    this.quantity?.setValue(this.quantity.value + 1);
  }

  submitToCart(){
    for (let i = 0; i < this.counterForm.value.quantity; i++) {
      this.beerService.shoppingCart.push(this.beerService.selectedBeer!);
    }
    //check if it's in the shopping cart:
    console.log(this.beerService.shoppingCart);
    this.isAddedToCart = true;
    
  }

  
  addToWishlist(){
    this.beerService.wishlist.push(this.beerService.selectedBeer!);

  //check if it's in the wishlist:
  console.log(this.beerService.wishlist);
}

  ngOnInit(): void {
    let ingredients = this.beerService.selectedBeer?.ingredients;

    let malt = ingredients?.malt;
    let hops = ingredients?.hops;
    let yeast = ingredients?.yeast;

    if (malt) {
      for (let i = 0; i < malt.length; i++) {
        let maltName = malt[i].name;
        let maltAmount = malt[i].amount.value;
        let maltUnit = malt[i].amount.unit;
        let maltString = `${maltAmount} ${maltUnit} ${maltName}`;

        this.maltArray.push(maltString);
      }
    }

    if (hops) {
      for (let i = 0; i < hops.length; i++) {
        let hopsName = hops[i].name;
        let hopsAmount = hops[i].amount.value;
        let hopsUnit = hops[i].amount.unit;
        let hopsString = `${hopsAmount} ${hopsUnit} ${hopsName}`;

        this.hopsArray.push(hopsString);
      }
    }

    if (yeast) {
      this.yeastArray.push(yeast);
    }
  }





}
