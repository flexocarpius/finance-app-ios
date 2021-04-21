import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-progress-bar',
  templateUrl: './vertical-progress-bar.component.html',
  styleUrls: ['./vertical-progress-bar.component.scss'],
})
export class VerticalProgressBarComponent implements OnInit {
  @Input() percent: number;
  positive: number;
  negative: number;
  positiveStyle: any;
  negativeStyle: any;

  constructor() {
    
  }

  ngOnInit() {
    this.positive = this.percent;
    this.negative = 100 - this.percent;
    this.positiveStyle = 'height: `${this.positive}%`';
    this.negativeStyle = 'height: `${this.negative}%`';
  }

}
