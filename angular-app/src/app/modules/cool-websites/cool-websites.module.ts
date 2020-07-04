import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolWebsitesComponent } from './cool-websites.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cool-websites',
    component: CoolWebsitesComponent,
  },
];

@NgModule({
  declarations: [CoolWebsitesComponent],
  imports: [
    CommonModule
  ]
})
export class CoolWebsitesModule { }
