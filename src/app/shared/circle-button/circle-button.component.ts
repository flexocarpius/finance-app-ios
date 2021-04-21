import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {
  @Input() color: string = 'success';

  constructor() { }

  ngOnInit() {}

}
