import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.page.html',
  styleUrls: ['./new-folder.page.scss'],
})
export class NewFolderPage implements OnInit {
  showContainerSuccess: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSaveFolder() {
    this.showContainerSuccess = true;
  }

  onViewFolder() {
    this.router.navigate(['/tabs/overview']);
  }

}
