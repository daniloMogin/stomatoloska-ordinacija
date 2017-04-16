import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GalleryComponent } from './gallery.component';

import { GalleryRoutingModule } from './gallery.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule {}