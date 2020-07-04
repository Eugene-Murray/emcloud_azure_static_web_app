import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    component: ServicesComponent,
  },
];

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
