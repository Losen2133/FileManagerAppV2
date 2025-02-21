import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileListPagePageRoutingModule } from './file-list-page-routing.module';

import { FileListPagePage } from './file-list-page.page';
import { PageHeaderComponent } from 'src/app/components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileListPagePageRoutingModule,
    PageHeaderComponent
  ],
  declarations: [FileListPagePage]
})
export class FileListPagePageModule {}
