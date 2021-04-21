import { Component, Input, OnInit } from '@angular/core';
import { CardDetailsModel } from '../../models/card-details.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  @Input() card: CardDetailsModel;

  constructor() { }

  ngOnInit() {}

}
