import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as L from 'leaflet';
import { ShapeService } from '../shape.service';
import { MarkerOptions } from 'leaflet';
import { SelectlayerComponent } from '../selectlayer/selectlayer.component';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']

})
export class MapComponent implements AfterViewInit {
  private map : L.Map;
  private states;

  @ViewChild('popupContent', {
    read: ViewContainerRef,
  }) popupContent: ViewContainerRef;
  markerIcon: MarkerOptions | undefined;



  //Vị trí bản đồ
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 21.54, 107.96 ],
      zoom: 14
    });

  

  
  //   ///Mini Map
  //         // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         //   maxZoom: 18,
  //         //   minZoom: 3,
  //         //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //         // });
        
  //         // new MiniMap(tiles,{toggleDisplay: true}).addTo(this.map);

    ///Lớp bản đồ
    const tileLayers = {
      'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map),
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
    };

    const statelayer = {
      "Thửa đất" : L.geoJSON().addTo(this.map)
    }
    
    L.control.layers(tileLayers, statelayer, {collapsed: false}).addTo(this.map);
  }



  constructor(
    private shapeService: ShapeService) { }

 
    

  ///Làm nổi bật đối tượng
  private highlightFeature(e: L.LeafletMouseEvent) {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      opacity: 0.5,
      color: '#DFA612',
      fillOpacity: 0.5,
      fillColor: '#FAE042'
    });
  }
  
  private resetFeature(e: L.LeafletMouseEvent) {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      opacity: 0.5,
      color: '#008f68',
      fillOpacity: 0.8,
      fillColor: '#6DB65B'
    });
  }
  ///Hiển thị đất
  private Clicked(e: L.LeafletMouseEvent) {
    const layer = e.target;
    // console.log(layer.feature.properties.SDD)
    layer.bindPopup(
      "<h1><p>FID:" + layer.feature.properties.FID + "</p></h1><p>Loại đất: " +  layer.feature.properties.SDD+ " </p> ");
  }

  
  private initStatesLayer() {
    const stateLayer = L.geoJSON(this.states, {
      style: () => ({
        weight: 3,
        opacity: 0.2,
        color: '#008f68',
        fillOpacity: 0.8,
        fillColor: '#6DB65B'
      }), 
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e)),
          mouseout: (e) => (this.resetFeature(e)),
          click: (e) => (this.Clicked(e)),
        })
      )
    });
    this.map.addLayer(stateLayer);
    stateLayer.bringToBack();
  }

  

  ngAfterViewInit(): void {
    this.initMap();
    // this.markerService.makeCapitalMarkers(this.map);
    this.shapeService.getStateShapes().subscribe(states => {
      this.states = states;
      this.initStatesLayer();
    });
    this.shapeService.makeInfoTD(this.map);
    // console.log(this.shapeService.makeInfoTD);



    ///Chọn điểm trên bản đồ 
    this.map.on("click", e => {
      console.log(e.latlng); // get the coordinates
      
      let marker = L.marker([e.latlng.lat, e.latlng.lng], this.markerIcon);
      marker.addTo(this.map).bindPopup(
      "X: "+ Math.round(e.latlng.lat * 1000)/1000 + 
      "<br> Y: "+ Math.round(e.latlng.lng * 1000)/1000, {maxWidth: 500});
  
    });
    
    
    ///Vẽ hình polygon
  }
}
