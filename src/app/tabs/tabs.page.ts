import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter }from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab = 'overview';

  constructor(private router: Router) {
    router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe((ev: RouterEvent) => {
      const url = ev.url;
      const parts = url.split('/');
      if (parts.length >= 2) {
        this.tab = parts[2];
      }
    });
  }

  onTabChange(tab: string) {
    this.tab = tab;
    this.router.navigate([`/tabs/${tab}`]);
  }
}
