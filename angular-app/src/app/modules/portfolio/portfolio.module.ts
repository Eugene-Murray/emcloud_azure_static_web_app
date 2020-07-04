import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: PortfolioComponent,
  },
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
