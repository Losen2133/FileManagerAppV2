import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'main-page',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/main-page/main-page.module').then(m => m.MainPagePageModule)
          }
        ]
      },
      {
        path: 'file-list-page',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/file-list-page/file-list-page.module').then(m => m.FileListPagePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/main-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/main-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
