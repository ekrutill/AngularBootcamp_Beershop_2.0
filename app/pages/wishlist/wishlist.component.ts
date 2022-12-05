import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(public beerService: BeerService) { }

  ngOnInit(): void {
  }

  deleteFromList(index: number){
    this.beerService.wishlist.splice(index,1)
  }

}
