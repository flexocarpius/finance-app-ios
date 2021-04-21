import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRowComponent } from './transaction-row.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [TransactionRowComponent],
    imports: [CommonModule, SharedModule],
    exports: [TransactionRowComponent],
    providers: [],
})
export class TransactionRowModule {}