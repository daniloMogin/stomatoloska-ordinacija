import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TreatmentsComponent } from './treatments.component';

import { TreatmentsRoutingModule } from './treatments.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreatmentsRoutingModule
  ],
  declarations: [
    TreatmentsComponent
  ]
})
export class TreatmentsModule {}