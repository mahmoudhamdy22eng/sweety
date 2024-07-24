import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  

  public underline = false;

  constructor(private router: Router) {}
// Method to show/hide sections based on clicked category
showSection(route: string): void {
}
  ngOnInit(): void {

  }
  
}
