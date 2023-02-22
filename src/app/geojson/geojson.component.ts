import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.css']
})
export class GeojsonComponent implements OnInit{
  map: L.Map;
  json: any;
  countries: Array<L.Layer> = [];
  selectedCountry: any;
  feature: L.GeoJSON;

  constructor(private http: HttpClient) {
  }

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10, attribution: 'OpenStreetMap'
      })
    ],
    zoom: 3
  };

  ngOnInit() {
    this.http.get('assets/data/SSDchuan.json').subscribe((layer: any) => {
      L.geoJSON(layer).getLayers().map((val: L.Layer) => {
        this.countries.push(val);
      });
    });
  }

  onSelectedChange(value: string) {
    this.selectedCountry = value;
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);


    this.http.get('assets/data/SSDchuan.json').subscribe((json: any) => {
      this.json = json;
      this.feature = L.geoJSON(this.json, {
        onEachFeature(feature, layer) {
          // console.log(feature.properties);
          return layer.bindPopup(feature.properties.NAME);
        },
        style: function filterColor(feature) {
          switch (feature.properties.NAME) {
            default: return {
              color: 'red',
              weight: 1,
              opacity: 0.65
            };
          }
        }.bind(this)
      }).addTo(map);
      map.fitBounds(this.feature.getBounds());
    });

    // map.on('click', <LeafletMouseEvent>(e) => { console.log(e.latlng) });
    this.map = map;
  }


  // zoom() {
  //   let coordinates: any = this.selectedCountry.feature.geometry;
  //   let name = this.selectedCountry.feature.properties.NAME;
  //   let dest = L.geoJSON(coordinates);
  //   this.feature.eachLayer(function (layer: L.GeoJSON) {
  //     if (layer.feature['properties'].NAME == name) {
  //       layer.setStyle({
  //         color: 'green',
  //         weight: 2,
  //         opacity: 0.65
  //       });
  //     } else {
  //       layer.setStyle({
  //         color: 'red',
  //         weight: 1,
  //         opacity: 0.65
  //       });
  //     }


  //   });

  //   this.map.fitBounds(dest.getBounds());
  // }

}


