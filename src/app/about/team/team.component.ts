import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Alaa Ahmed',
      role: 'Head Baker',
      bio: 'Alaa has been baking for over 20 years...',
      image: 'assets/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Chocolatier',
      bio: 'Jane is passionate about creating the finest chocolates...',
      image: 'assets/jane-smith.jpg',
    },
    {
      name: 'Mahmoud Hamdy',
      role: 'Pastry Chef',
      bio: 'Mahmoud specializes in creating stunning pastries...',
      image: 'assets/emily-johnson.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
