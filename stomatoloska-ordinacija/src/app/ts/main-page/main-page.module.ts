import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainPageComponent } from './main-page.component';

import { MainPageRoutingModule } from './main-page.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPageComponent
  ]
})
export class MainPageModule {}