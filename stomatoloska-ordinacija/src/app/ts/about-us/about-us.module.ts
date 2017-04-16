import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AboutUsComponent } from './about-us.component';

import { AboutUsRoutingModule } from './about-us.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutUsRoutingModule
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule {}