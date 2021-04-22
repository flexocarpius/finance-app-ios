import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { IonicModule } from '@ionic/angular';
import { RoundedInitialsComponent } from './rounded-initials/rounded-initials.component';
import { VerticalProgressBarComponent } from './vertical-progress-bar/vertical-progress-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from './switch/switch.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

@NgModule({
    declarations: [CardDetailsComponent, TransactionDetailComponent, RoundedButtonComponent, RoundedInitialsComponent, VerticalProgressBarComponent,
        ProgressBarComponent, CircleButtonComponent, InputComponent, SelectComponent, SwitchComponent, FabButtonComponent],
    imports: [CommonModule, IonicModule.forRoot()],
    exports: [CardDetailsComponent, TransactionDetailComponent, RoundedButtonComponent, RoundedInitialsComponent, VerticalProgressBarComponent,
        ProgressBarComponent, CircleButtonComponent, InputComponent, SelectComponent, SwitchComponent, FabButtonComponent],
    providers: [],
})
export class SharedModule {}