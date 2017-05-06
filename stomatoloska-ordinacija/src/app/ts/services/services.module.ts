import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServicesComponent } from './services.component';

import { ServicesRoutingModule } from './services.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule {}