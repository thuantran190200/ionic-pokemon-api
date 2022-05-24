import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/list/list.module').then((m) => m.ListPageModule),
          },
        ],
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/setting/setting.module').then(
                (m) => m.SettingPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
