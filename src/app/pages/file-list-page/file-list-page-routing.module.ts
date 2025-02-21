import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileListPagePage } from './file-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: FileListPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileListPagePageRoutingModule {}
