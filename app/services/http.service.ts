import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Beer } from '../models/beer-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly BASE_URL: string = 'https://api.punkapi.com/v2/beers';


  constructor(private http: HttpClient) { }

  public getAllBeers(): Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL);
  }


  // filtering:

  public getBeerStylesFilter():Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL).pipe(
      map( beerStylesfilter => {
        const filteredlist = beerStylesfilter.filter(b => b.description.includes('IPA') || b.description.includes('Porter & Staut') || b.description.includes('Lager & Helles') 
        || b.description.includes('Sour ale & Wild ale')  || b.description.includes('Pale ale')
        );
        return filteredlist;
      })
    )
  }

  public getMethodMashTempFilter():Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL).pipe(
      map( mashTempFilter => {
        const filteredlist = mashTempFilter.filter(b => b.method.mash_temp);
        return filteredlist;
      })
    )

  }

  public getMethodFermentationFilter():Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL).pipe(
      map( fermentationFilter => {
        const filteredlist = fermentationFilter.filter(b => b.method.fermentation);
        return filteredlist;
      })
    )

  }

  public getMethodTwistFilter():Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL).pipe(
      map( twistFilter => {
        const filteredlist = twistFilter.filter(b => b.method.twist);
        return filteredlist;
      })
    )

  }

  public getOfferFilter():Observable<Beer[]>{
    return this.http.get<Beer[]>(this.BASE_URL).pipe(
      map( offerFilter => {
        const filteredlist = offerFilter.filter(b => b.abv = 2.25);
        return filteredlist;
      })
    )

  }



}
