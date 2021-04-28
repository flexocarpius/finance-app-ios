import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animated-tabs',
  templateUrl: './animated-tabs.component.html',
  styleUrls: ['./animated-tabs.component.scss'],
})
export class AnimatedTabsComponent implements OnInit {
  @Input() tab: string = 'overview';
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  tabClick(tab: string) {
    this.change.emit(tab);
  }

}
