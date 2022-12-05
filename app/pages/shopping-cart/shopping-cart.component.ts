import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    @Input() beer?: Beer
    counterForm: FormGroup;

    constructor(fb: FormBuilder, public beerService: BeerService, private router: Router) {
      this.counterForm = fb.group({
        quantity: ['']
      });
    }

    get quantity(): FormControl {
      return this.counterForm.get('quantity') as FormControl
    }

    ngOnInit(): void {
      
    }

    deleteFromCart(){
      if (this.quantity.value > 0) {
        this.counterForm.reset();
      }
    }

    addUpToCart(){
      this.quantity?.setValue(this.quantity.value + 1);
    }


    deleteFromList(index: number){
      this.beerService.shoppingCart.splice(index,1)
    }

    onNavigate(beer:Beer){
      this.router.navigate(['details', {id: beer.id}])
      this.beerService.selectedBeer = beer;
    }

    onNavigateToStore(){
      this.router.navigate([''])
     
    }


}
