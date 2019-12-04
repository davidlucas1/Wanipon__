import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimesanunciadosPage } from './animesanunciados.page';

const routes: Routes = [
  {
    path: '',
    component: AnimesanunciadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimesanunciadosPage]
})
export class AnimesanunciadosPageModule {}
