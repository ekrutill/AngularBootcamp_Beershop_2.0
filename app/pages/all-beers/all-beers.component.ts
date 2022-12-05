import { Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';
import { delay, Subscription } from 'rxjs';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss']
})
export class AllBeersComponent implements OnInit, OnDestroy{

  //search input filtering:
  public query: string = '';
  public value: string = '';
  private subscriptions = new Subscription();




  constructor(private httpService: HttpService, public beerService: BeerService, private router: Router) {
    this.httpService.getAllBeers().subscribe((beerData)=> {
      this.beerService.Beers = beerData as Beer[];
    })
   }


  ngOnInit(): void {
    this.subscriptions.add(this.beerService.listenQuery().subscribe(q => { this.query = q}));
    this.subscriptions.add(this.beerService.listenChecked().subscribe(v => { this.value = v}));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }


  
}
