import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  cards = [
    {
      link: 'https://example.com/sweet1',
      image: 'assets/images/oreo_logo.png',
      title: 'oreo ',
    },
    {
      link: 'https://example.com/sweet2',
      image: 'assets/images/pringles.png',
      title: 'pringles',
    },
    {
      link: 'https://example.com/sweet3',
      image: 'assets/images/biscolatta.png',
      title: 'biscolatta Sweets',
    },
  ];

  ngOnInit(): void {
    // Initialize any additional data if necessary
  }
}
