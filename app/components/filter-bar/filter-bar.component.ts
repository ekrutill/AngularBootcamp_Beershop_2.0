import { Router } from '@angular/router';
import { Beer } from 'src/app/models/beer-model';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  panelOpenState = false;

  isFiltersActive: boolean;
  wichBeerStylesFilterSelected: boolean;
  wichOfferFilterSelected: boolean;
  wichMethodFilterSelected: boolean;
  errorMessage: boolean;
  isCheckked?: boolean;

  alcForm: FormGroup

  constructor(private httpService: HttpService, public beerService: BeerService, public fb: FormBuilder) {
    this.isFiltersActive = false;
    this.wichBeerStylesFilterSelected = false;
    this.wichMethodFilterSelected = false;
    this.wichOfferFilterSelected = false;
    this.errorMessage = false;

    this.alcForm = fb.group({
      from: [''],
      to: [''],
    });
   }

  ngOnInit(): void {
  }

  get from(): FormControl {
    return this.alcForm.get('from') as FormControl;
  }

  get to(): FormControl {
    return this.alcForm.get('to') as FormControl;
  }

  apply(){
    if (this.from.value && this.to.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) =>
          beer.abv! >= this.from.value && beer.abv! <= this.to.value
      );this.errorMessage = !this.errorMessage;
    } 
    else if (this.from.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) => beer.abv! >= this.from.value
      );this.errorMessage = !this.errorMessage;
    } 
    else if (this.to.value) {
      this.beerService.Beers = this.beerService.Beers.filter(
        (beer: Beer) => beer.abv! <= this.to.value
      );this.errorMessage = !this.errorMessage;
    } 

    else (this.from.value == 0 && this.to.value == 0) 
        this.errorMessage = true; // error message - if there is no match - it is working if the value 0-1, or 0.
        
     
    }
  

  resetFiltering(){
    this.httpService.getAllBeers().subscribe((beerData)=>{
      this.beerService.Beers = beerData as Beer[];
    })
    this.isFiltersActive = false;
    this.wichBeerStylesFilterSelected = false;
    this.wichMethodFilterSelected = false;
    this.wichOfferFilterSelected = false;

    this.alcForm.reset();
    this.errorMessage = false;
    this.isCheckked = false;

  }


  filteringBeerStyles(){
    this.httpService.getBeerStylesFilter().subscribe((filteredData) => {
      this.beerService.Beers = filteredData as Beer[];
    })
    this.isFiltersActive = true;
    this.wichBeerStylesFilterSelected = true;
    this.isCheckked = true;
  }

  filteringTwistMethod(){
    this.httpService.getMethodTwistFilter().subscribe((filteredData) => {
      this.beerService.Beers = filteredData as Beer[];
    })
    this.isFiltersActive = true;
    this.wichMethodFilterSelected = true;
    this.isCheckked = true;

  }

  filteringFermentationMethod(){
    this.httpService.getMethodFermentationFilter().subscribe((filteredData) => {
      this.beerService.Beers = filteredData as Beer[];
    })
    this.isFiltersActive = true;
    this.wichMethodFilterSelected = true;
    this.isCheckked = true;

  }

  filteringMashTempMethod(){
    this.httpService.getMethodMashTempFilter().subscribe((filteredData) => {
      this.beerService.Beers = filteredData as Beer[];
    })
    this.isFiltersActive = true;
    this.wichMethodFilterSelected = true;
    this.isCheckked = true;

  }

  filteringOfferMethod(){
    this.httpService.getOfferFilter().subscribe((filteredData) => {
      this.beerService.Beers = filteredData as Beer[];
    })
    this.isFiltersActive = true;
    this.wichOfferFilterSelected = true;
    this.isCheckked = true;

  
  }
  
}
