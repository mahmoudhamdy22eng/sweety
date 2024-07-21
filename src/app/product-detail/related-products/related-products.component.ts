import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css'],
})
export class RelatedProductsComponent implements OnInit {
  @Input()
  products: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
