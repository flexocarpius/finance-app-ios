import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CardDetailsModel } from 'src/app/models/card-details.model';
import { TransactionModel } from 'src/app/models/transaction.model';

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
      percent: 66
    },
    {
      label: 'Tue',
      percent: 66
    },
    {
      label: 'Wed',
      percent: 66
    },
    {
      label: 'Thu',
      percent: 66
    },
    {
      label: 'Fri',
      percent: 66
    },
    {
      label: 'Sat',
      percent: 66
    }
  ];

  constructor(private router: Router) { }

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

  onAddExpenseClick(card: CardDetailsModel) {
    this.router.navigate(['/new-folder']);
  }
}
