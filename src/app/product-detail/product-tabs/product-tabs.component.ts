import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.css'],
})
export class ProductTabsComponent implements OnInit {
  @Input() reviews: string[] = [];
  @Input() specifications: any;

  selectedTab: string = 'reviews';

  constructor() {}

  ngOnInit(): void {}

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
