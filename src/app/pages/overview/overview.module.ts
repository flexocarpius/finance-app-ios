import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionRowModule } from '../../components/transaction-row/transaction-row.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    SharedModule,
    TransactionRowModule,
  ],
  declarations: [OverviewPage, CardListComponent]
})
export class OverviewPageModule {}
