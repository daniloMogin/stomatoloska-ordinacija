import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './index/app.component';

import { AppRoutingModule } from './routing/app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { MainPageModule } from './main-page/main-page.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { ServicesModule } from './services/services.module';

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
    MainPageModule,
    ServicesModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
