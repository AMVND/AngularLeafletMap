import { Component } from '@angular/core';
import * as L from 'leaflet';
import { DrawEvents, featureGroup, FeatureGroup, icon, latLng, tileLayer } from 'leaflet';


@Component({
  selector: 'app-drawtoolbar',
  templateUrl: './drawtoolbar.component.html',
  styleUrls: ['./drawtoolbar.component.css']
})
export class DrawtoolbarComponent {
  drawnItems: FeatureGroup = featureGroup();
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
		],
    zoom: 14,
		center: latLng({ lat: 21.54, lng: 107.96 })
	};

	drawOptions: any = {
		position: 'topleft',
		draw: {
			marker: {
				icon: icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: 'assets/leaflet/marker-icon.png',
					iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
					shadowUrl: 'assets/leaflet/marker-shadow.png'
				})
			}
		},
		edit: {
			featureGroup: this.drawnItems
		}
	};

	drawLocal: any = {
		draw: {
			toolbar: {
				buttons: {
					polygon: 'Draw an awesome polygon!'
				}
			}
		}
	};

	public onDrawCreated(e: any) {
		// tslint:disable-next-line:no-console
		console.log('Draw Created Event!');

		const layer = (e as DrawEvents.Created).layer;
		this.drawnItems.addLayer(layer);
	}

	public onDrawStart(e: any) {
		// tslint:disable-next-line:no-console
		console.log('Draw Started Event!');
	}
}
