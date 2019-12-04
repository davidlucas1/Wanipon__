import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SerieordenadaPage } from './serieordenada.page';

const routes: Routes = [
  {
    path: ':idordem',
    component: SerieordenadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SerieordenadaPage]
})
export class SerieordenadaPageModule {}
