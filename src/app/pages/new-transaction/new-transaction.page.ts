import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDetailsModel } from 'src/app/models/card-details.model';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.page.html',
  styleUrls: ['./new-transaction.page.scss'],
})
export class NewTransactionPage implements OnInit {
  @Input() card: CardDetailsModel;
  value: string;

  type: 'income' | 'expense' = 'income';

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  onBack() {
    this.modal.dismiss({
      dismissed: true
    });
  }

  onChangeType(type: 'income' | 'expense') {
    this.type = type;
  }

  onSave() {
    this.modal.dismiss({
      dismissed: true
    });
  }
}
