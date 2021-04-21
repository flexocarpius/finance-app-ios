import { Component, Input, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.scss'],
})
export class TransactionRowComponent implements OnInit {
  @Input() transaction: TransactionModel;
  
  constructor() { }

  ngOnInit() {}

}
