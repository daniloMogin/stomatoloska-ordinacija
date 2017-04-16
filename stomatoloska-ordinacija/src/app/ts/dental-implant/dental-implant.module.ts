import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DentalImplantComponent } from './dental-implant.component';

import { DentalImplantRoutingModule } from './dental-implant.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DentalImplantRoutingModule
  ],
  declarations: [
    DentalImplantComponent
  ]
})
export class DentalImplantModule {}