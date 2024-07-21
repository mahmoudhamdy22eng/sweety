import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
})
export class ProductImagesComponent implements OnInit {
  @Input() images: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
