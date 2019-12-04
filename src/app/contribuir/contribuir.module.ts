import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContribuirPage } from './contribuir.page';

const routes: Routes = [
  {
    path: '',
    component: ContribuirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [ContribuirPage]
})
export class ContribuirPageModule {}
