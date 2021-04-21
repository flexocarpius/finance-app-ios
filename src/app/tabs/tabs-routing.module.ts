import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'overview',
        loadChildren: () => import('../pages/overview/overview.module').then(m => m.OverviewPageModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('../pages/analytics/analytics.module').then(m => m.AnalyticsPageModule)
      },
      {
        path: 'downloads',
        loadChildren: () => import('../pages/downloads/downloads.module').then(m => m.DownloadsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
