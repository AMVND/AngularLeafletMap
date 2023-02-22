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
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { NgAisModule } from 'angular-instantsearch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawtoolbarComponent } from './drawtoolbar/drawtoolbar.component';
import { GeojsonComponent } from './geojson/geojson.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RoutingMachineComponent,
    SelectlayerComponent,
    DrawtoolbarComponent,
    GeojsonComponent,

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
    LeafletModule,
    LeafletDrawModule
  ],
  providers: [ PopupService, ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
