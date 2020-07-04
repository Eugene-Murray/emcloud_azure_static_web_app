import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    component: TechnologyComponent,
  },
];

@NgModule({
  declarations: [TechnologyComponent],
  imports: [
    CommonModule
  ]
})
export class TechnologyModule { }
