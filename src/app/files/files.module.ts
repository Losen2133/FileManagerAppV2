import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilesPageRoutingModule } from './files-routing.module';

import { FilesPage } from './files.page';
import { PageHeaderComponent } from '../components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilesPageRoutingModule,
    PageHeaderComponent
  ],
  declarations: [FilesPage]
})
export class FilesPageModule {}
