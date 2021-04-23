import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() positive: number;
  @Input() negative: number;
  positiveStyle: any;
  negativeStyle: any;

  constructor() {
    
  }

  ngOnInit() {
    const total = Math.abs(this.positive) + Math.abs(this.negative);
    this.positiveStyle = `width: ${(this.positive / total) * 100}%`;
    this.negativeStyle = `width: ${(this.negative / total) * 100}%`;
  }

}
