import { Component, OnInit } from '@angular/core';
// import * as L from 'leaflet';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css'],
})
export class LocationMapComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // private map: L.Map;
  // constructor() {}
  // ngOnInit(): void {
  //   this.initMap();
  // }
  // private initMap(): void {
  //   this.map = L.map('map', {
  //     center: [30.033333, 31.233334], // Coordinates for Cairo, Egypt
  //     zoom: 13,
  //   });
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap contributors',
  //   }).addTo(this.map);
  //   L.marker([30.033333, 31.233334])
  //     .addTo(this.map)
  //     .bindPopup('SoSweety Store')
  //     .openPopup();
  // }
}
