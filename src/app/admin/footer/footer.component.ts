import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class AFooterComponent {

  public underline = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
}
