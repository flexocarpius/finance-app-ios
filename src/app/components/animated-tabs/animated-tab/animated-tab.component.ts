import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animated-tab',
  templateUrl: './animated-tab.component.html',
  styleUrls: ['./animated-tab.component.scss'],
})
export class AnimatedTabComponent implements OnInit {
  @Input() name: string;
  @Input() collapsed: boolean;
  @Output() onTabClick = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  tabClick() {
    this.onTabClick.emit(this.name);
  }

}
