import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreatmentsComponent } from './treatments.component';

const treatmentsRoutes: Routes = [
  { path: 'treatments',  component: TreatmentsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(treatmentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TreatmentsRoutingModule { }