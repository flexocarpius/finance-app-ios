import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewFolderPageRoutingModule } from './new-folder-routing.module';

import { NewFolderPage } from './new-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewFolderPageRoutingModule
  ],
  declarations: [NewFolderPage]
})
export class NewFolderPageModule {}
