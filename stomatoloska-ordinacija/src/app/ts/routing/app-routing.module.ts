import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './../not-found.component';
import { SelectivePreloadingStrategy } from './../selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'main-page',
    loadChildren: 'app/ts/main-page/main-page.module#MainPageModule',
    data: { preload: true }
  },
  {
    path: 'about-us',
    loadChildren: 'app/ts/about-us/about-us.module#AboutUsModule',
    data: { preload: true }
  },
  {
    path: 'services',
    loadChildren: 'app/ts/services/services.module#ServicesModule',
    data: { preload: true }
  },
  {
    path: 'contact',
    loadChildren: 'app/ts/contact/contact.module#ContactModule',
    data: { preload: true }
  },
  { path: '',   redirectTo: '/about-us', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }