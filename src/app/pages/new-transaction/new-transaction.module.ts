import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTransactionPageRoutingModule } from './new-transaction-routing.module';

import { NewTransactionPage } from './new-transaction.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTransactionPageRoutingModule,
    SharedModule,
  ],
  declarations: [NewTransactionPage]
})
export class NewTransactionPageModule {}
