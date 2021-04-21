import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-initials',
  templateUrl: './rounded-initials.component.html',
  styleUrls: ['./rounded-initials.component.scss'],
})
export class RoundedInitialsComponent implements OnInit {
  @Input() initials: string;
  @Input() name: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    if (!this.initials && this.name) {
      const splitted = this.name.split(' ');
      if (splitted.length >= 2) {
        this.initials = splitted[0].substring(0, 1) + splitted[1].substring(0, 1);
      }
      else {
        this.initials = this.name.substring(0, 2);
      }
    }
  }

}
