import { Component } from '@angular/core';
import { BeerService } from './services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Beer_shop';

  constructor() {}

}
