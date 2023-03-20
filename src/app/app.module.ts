import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoiteComponent } from './boite/boite.component';
import { TirelireComponent } from './tirelire/tirelire.component';

@NgModule({
  declarations: [
    AppComponent,
    BoiteComponent,
    TirelireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
