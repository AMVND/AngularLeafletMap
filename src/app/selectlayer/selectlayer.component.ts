import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { latLng, Layer } from 'leaflet';
@Component({
  selector: 'app-selectlayer',
  templateUrl: './selectlayer.component.html',
  styleUrls: ['./selectlayer.component.css']
})
export class SelectlayerComponent{

     // Values to bind to Leaflet Directive
     layers: Layer[];
     layersControl = {
         baseLayers: {
             'Open Street Map': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              minZoom: 3,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }),
            'Vệ tinh': L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&hl=tr&x={x}&y={y}&z={z}', {
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              maxNativeZoom: 20,
              zIndex: 0,
              maxZoom: 20
            }),
            'Địa điểm': L.tileLayer('https://{s}.google.com/vt/lyrs=m&hl=tr&x={x}&y={y}&z={z}', {
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              zIndex: 0,
              maxNativeZoom: 21,
              maxZoom: 21
            }),
            'Độ cao': L.tileLayer('https://{s}.google.com/vt/lyrs=p&hl=tr&x={x}&y={y}&z={z}', {
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              zIndex: 0,
              maxNativeZoom: 21,
              maxZoom: 21
            })
         },
         overlays: {
            
         }
     };
     options = {
         zoom: 10,
         center: latLng(46.879966, -121.726909)
     };
 
 
     constructor() {
         // This is different from the demo, just set them manually
         this.layers = [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          })
          ];
     }
}
