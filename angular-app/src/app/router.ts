import { Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./modules/products/products.module').then((m) => m.ProductsModule),
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () =>
  //     import('./modules/contact/contact.module').then((m) => m.ContactModule),
  // },
  { path: '**', component: NotFoundComponent },
];
