import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { IonicModule } from '@ionic/angular';
import { RoundedInitialsComponent } from './rounded-initials/rounded-initials.component';
import { VerticalProgressBarComponent } from './vertical-progress-bar/vertical-progress-bar.component';

@NgModule({
    declarations: [CardDetailsComponent, TransactionDetailComponent, RoundedButtonComponent, RoundedInitialsComponent, VerticalProgressBarComponent],
    imports: [CommonModule, IonicModule.forRoot()],
    exports: [CardDetailsComponent, TransactionDetailComponent, RoundedButtonComponent, RoundedInitialsComponent, VerticalProgressBarComponent],
    providers: [],
})
export class SharedModule {}