import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimestemporadaPage } from './animestemporada.page';

const routes: Routes = [
  {
    path: '',
    component: AnimestemporadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimestemporadaPage]
})
export class AnimestemporadaPageModule {}
