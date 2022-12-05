import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Beer } from 'src/app/models/beer-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from 'src/app/services/beer.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  wishlistCounter: number = 0;

  deselectedBeer = undefined;

  searchInputForm: FormGroup
  
  constructor(public fb:FormBuilder, public beerService: BeerService, private router: Router, private httpService: HttpService) {
   this.searchInputForm = fb.group({
    searchInput: ['', Validators.minLength(3)]
       } 
     )
   }

   ngOnInit(): void {
    this.searchInputForm.addControl('searchInput', new FormGroup({
      searchInput: new FormControl()
    }))
  }
  
  backToPage(){
    this.router.navigate(['']);
    this.beerService.selectedBeer = this.deselectedBeer;

  }

  // for search input:
  onSearch(value:string):void {
    if(this.searchInputForm.valid){
      this.beerService.emitQuery(value)
    }
    else {
      this.beerService.emitQuery('');
    }
  }


}
