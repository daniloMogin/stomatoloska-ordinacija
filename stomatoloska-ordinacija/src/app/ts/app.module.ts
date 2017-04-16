import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './index/app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { TreatmentsModule } from './treatments/treatments.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { DentalImplantModule } from './dental-implant/dental-implant.module';
import { DentalTourismModule } from './dental-tourism/dental-tourism.module';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutUsModule,
    TreatmentsModule,
    DentalImplantModule,
    DentalTourismModule,
    GalleryModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
