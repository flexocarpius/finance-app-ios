import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardDetailsModel } from '../../models/card-details.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Output() addExpenseClick = new EventEmitter();

  cards: CardDetailsModel[] = [
    {
      title: 'College Saving',
      date: new Date(),
      negative: 120,
      positive: 480,
      total: 59589263
    },
    {
      title: 'College Saving',
      date: new Date(),
      negative: 120,
      positive: 480,
      total: 59589263
    }
  ];

  constructor() { }

  ngOnInit() {}

  onAddClick(card: CardDetailsModel) {
    this.addExpenseClick.emit(card);
  }

}
