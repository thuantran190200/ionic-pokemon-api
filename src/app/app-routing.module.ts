import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pages/pokemon/pokemon.module').then((m) => m.PokemonPageModule),
  },
  {
    path: 'pokemon-detail/:id',
    loadChildren: () =>
      import('./pages/pokemon-detail/pokemon-detail.module').then(
        (m) => m.PokemonDetailPageModule
      ),
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  // },
  // {
  //   path: 'setting',
  //   loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
