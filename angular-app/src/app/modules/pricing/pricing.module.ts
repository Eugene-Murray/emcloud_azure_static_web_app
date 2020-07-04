import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: PricingComponent,
  },
];

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule
  ]
})
export class PricingModule { }
