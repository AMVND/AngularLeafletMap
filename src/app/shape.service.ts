import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupService } from './popup.service';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  constructor(private http: HttpClient,
    private popupService: PopupService) { }

  getStateShapes() {
    return this.http.get('/assets/data/SSDchuan.json');
  }

  capitals: string = '/assets/data/SSDchuan.json';

  makeInfoTD(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        // const lon = c.geometry.coordinates[0];
        // const lat = c.geometry.coordinates[1];
        const latlgn = c.geometry.coordinates[0][1];
        const marker = L.polygon([latlgn]);
        console.log(marker);
        marker.addTo(map);
      }
    });
  }

}
