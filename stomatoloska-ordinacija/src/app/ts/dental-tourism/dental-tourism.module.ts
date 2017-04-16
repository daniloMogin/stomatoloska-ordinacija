import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DentalTourismComponent } from './dental-tourism.component';

import { DentalTourismRoutingModule } from './dental-tourism.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DentalTourismRoutingModule
  ],
  declarations: [
    DentalTourismComponent
  ]
})
export class DentalTourismModule {}