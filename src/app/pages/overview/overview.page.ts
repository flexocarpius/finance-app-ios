import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { CardDetailsModel } from 'src/app/models/card-details.model';
import { TransactionModel } from 'src/app/models/transaction.model';
import { StatusBarService } from 'src/app/services/status-bar.service';
import { NewTransactionPage } from '../new-transaction/new-transaction.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  transactions: TransactionModel[];
  days = [
    {
      label: 'Sun',
      percent: 66
    },
    {
      label: 'Mon',
      percent: 33
    },
    {
      label: 'Tue',
      percent: 50
    },
    {
      label: 'Wed',
      percent: 10
    },
    {
      label: 'Thu',
      percent: 70
    },
    {
      label: 'Fri',
      percent: 30
    },
    {
      label: 'Sat',
      percent: 0
    }
  ];

  constructor(private router: Router, private modal: ModalController, private statusBar: StatusBarService) { }

  ngOnInit() {
    this.transactions = [
      {
        name: 'Masayoshi Settherg',
        value: -15.12
      },
      {
        name: 'Anna Bunn',
        value: 580.12
      },
      {
        name: 'Bank Mandiri',
        value: 96506223
      }
    ]
  }

  ionViewWillEnter() {
    this.statusBar.setLightStatusBar();
  }

  ionViewWillLeave() {
    this.statusBar.setLightStatusBar();
  }

  async onAddExpenseClick(card: CardDetailsModel) {
    const modal = await this.modal.create({
      component: NewTransactionPage,
      swipeToClose: true,
      componentProps: {
        card
      }
    });
    return await modal.present();
  }
}
