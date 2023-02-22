import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import { latLng, Layer, tileLayer } from 'leaflet';
import { ShapeService } from '../shape.service';
@Component({
  selector: 'app-selectlayer',
  templateUrl: './selectlayer.component.html',
  styleUrls: ['./selectlayer.component.css']
})
export class SelectlayerComponent implements OnInit {
  private map : L.Map;
  private states;

  @ViewChild('popupContent', {
    read: ViewContainerRef,
  }) popupContent: ViewContainerRef;
  markerIcon: L.MarkerOptions | undefined;

  constructor() { }
    layers: Layer[];
    options = {
      // layers: [
      //   tileLayer('https://{s}.tile.openstreetmap.org/hot/{z}/{x}/{y}.png', { maxZoom: 30, minZoom: 12 }),
      // ],
      // zoom: 14,
      // center: L.latLng(21.54, 107.96)
    };
    layersControl: any;

    ngOnInit() {
      // this.layersControl = {
      //   baseLayers: {
      //     "Topo Map": tileLayer(
      //       "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      //       { maxZoom: 30, minZoom: 12 }
      //     ),
      //     Imagery: tileLayer(
      //       "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      //       { maxZoom: 30, minZoom: 12 }
      //     ),
      //     'Outdoors': tileLayer('https://{s}.tile.openstreetmap.org/hot/{z}/{x}/{y}.png', { maxZoom: 30, minZoom: 12 }),
      //     None: tileLayer("", { maxZoom: 100, minZoom: 12 })
      //   }
      // };
    }


}
