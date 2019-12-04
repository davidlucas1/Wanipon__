import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimesordenadosPage } from './animesordenados.page';

const routes: Routes = [
  {
    path: '',
    component: AnimesordenadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimesordenadosPage]
})
export class AnimesordenadosPageModule {}
