import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './../not-found.component';
import { SelectivePreloadingStrategy } from './../selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'about-us',
    loadChildren: 'app/ts/about-us/about-us.module#AboutUsModule',
    data: { preload: true }
  },
  {
    path: 'treatments',
    loadChildren: 'app/ts/treatments/treatments.module#TreatmentsModule',
    data: { preload: true }
  },
  {
    path: 'dental-implant',
    loadChildren: 'app/ts/dental-implant/dental-implant.module#DentalImplantModule',
    data: { preload: true }
  },
  {
    path: 'dental-tourism',
    loadChildren: 'app/ts/dental-tourism/dental-tourism.module#DentalTourismModule',
    data: { preload: true }
  },
  {
    path: 'gallery',
    loadChildren: 'app/ts/gallery/gallery.module#GalleryModule',
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
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }