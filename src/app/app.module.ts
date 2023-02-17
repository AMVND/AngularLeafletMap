import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopupService } from './popup.service';
import { ShapeService } from './shape.service';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RoutingMachineComponent } from './routing-machine/routing-machine.component';
import {NgxLeafletLocateModule} from '@runette/ngx-leaflet-locate';
import { SelectlayerComponent } from './selectlayer/selectlayer.component';

import { NgAisModule } from 'angular-instantsearch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RoutingMachineComponent,
    SelectlayerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLeafletLocateModule,
    FormsModule,
    ReactiveFormsModule,
    NgAisModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [ PopupService, ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
