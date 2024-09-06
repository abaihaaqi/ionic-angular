import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
        canMatch: [AuthGuard],
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./offers/offers.module').then((m) => m.OffersPageModule),
        canMatch: [AuthGuard],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
