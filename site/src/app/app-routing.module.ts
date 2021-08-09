import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ApartmentsComponent} from './apartments/apartments.component';
import {PricesComponent} from './prices/prices.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'gallery/:id', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apartments', component: ApartmentsComponent},
  { path: 'prices', component: PricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
