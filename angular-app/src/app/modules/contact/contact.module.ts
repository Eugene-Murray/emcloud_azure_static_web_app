import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [ContactComponent],
  exports: [RouterModule, ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
