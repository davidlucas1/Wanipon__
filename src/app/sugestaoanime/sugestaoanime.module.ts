import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SugestaoanimePage } from './sugestaoanime.page';

const routes: Routes = [
  {
    path: '',
    component: SugestaoanimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SugestaoanimePage]
})
export class SugestaoanimePageModule {}
