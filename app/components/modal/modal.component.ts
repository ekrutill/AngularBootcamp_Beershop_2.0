import { BeerService } from 'src/app/services/beer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isVisible:boolean = true

  constructor(public beerService: BeerService, public router: Router) { }

  ngOnInit(): void {
  }

  onNavigate(){
    this.router.navigate(['shopping-cart'])
  }

  onClose(){
    this.isVisible = false;
  }

}
