import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDetailsModel } from 'src/app/models/card-details.model';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.page.html',
  styleUrls: ['./new-transaction.page.scss'],
})
export class NewTransactionPage implements OnInit {
  categoryOptions = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];
  periodOptions = [
    'Daily',
    'Weekly',
    'Monthly',
    'Bimonthly'
  ];
  categorySelected = '';
  periodSelected = ''
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

  onCategorySelected(option: any) {
    const value = option.Category.value;
    this.categorySelected = value;
  }

  onPeriodSelected(option: any) {
    const value = option.Period.value;
    this.periodSelected = value;
  }

  onSave() {
    this.modal.dismiss({
      dismissed: true
    });
  }
}
