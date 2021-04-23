import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {
  reports = [
    {
      name: 'My monthly report',
    },
    {
      name: 'General report',
    },
    {
      name: 'Expenses report',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
