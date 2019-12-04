import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'animeinfo', loadChildren: './animeinfo/animeinfo.module#AnimeinfoPageModule' },
  { path: 'animestemporada', loadChildren: './animestemporada/animestemporada.module#AnimestemporadaPageModule' },
  { path: 'animesordenados', loadChildren: './animesordenados/animesordenados.module#AnimesordenadosPageModule' },
  { path: 'serieordenada', loadChildren: './serieordenada/serieordenada.module#SerieordenadaPageModule' },
  { path: 'animesanunciados', loadChildren: './animesanunciados/animesanunciados.module#AnimesanunciadosPageModule' },
  { path: 'geradoranime', loadChildren: './geradoranime/geradoranime.module#GeradoranimePageModule' },
  { path: 'sugestaoanime', loadChildren: './sugestaoanime/sugestaoanime.module#SugestaoanimePageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'desejos', loadChildren: './desejos/desejos.module#DesejosPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'contribuir', loadChildren: './contribuir/contribuir.module#ContribuirPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
