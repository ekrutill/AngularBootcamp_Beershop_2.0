import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  {path: 'allbeers', redirectTo: '', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
