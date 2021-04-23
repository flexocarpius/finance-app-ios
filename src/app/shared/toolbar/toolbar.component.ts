import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() position: 'left' | 'center';
  @Input() backButton: boolean = false;
  @Input() color: 'dark' | 'light' = 'light';

  @Output() onBack = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onBackButtonClick() {
    this.onBack.emit();
  }
}
