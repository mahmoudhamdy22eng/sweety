import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AHeaderComponent {

  public underline = false;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }
}
