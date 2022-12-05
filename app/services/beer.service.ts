import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../models/beer-model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  Beers: Beer[] = [];
  shoppingCart: Beer[] = [];
  wishlist: Beer[] = [];

  // query for using searchFilter pipe:
  query:any;

  // only one beer:
  selectedBeer?: Beer;


  //search input field solution02:
  //taking the search field to the BehaviorSubject and emit to another component (and using unique pipe)
  filterQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  filterChecked: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() { }

  emitQuery(query:string){
    this.filterQuery.next(query);
  }

  emitChecked(value:string){
    this.filterChecked.next(value);
  }
  
  listenChecked(){
    return this.filterChecked.asObservable();
  }
  
  listenQuery(){
    return this.filterQuery.asObservable();
  }
}
