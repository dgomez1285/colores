import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColoresModule } from './colores/colores.module';
import { HttpClientModule } from '@angular/common/http';
import { ColoresService } from './colores/colores.service';
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ColoresModule,
    HttpClientModule
  ],
  providers: [
    ColoresService,
    MatDialog
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
