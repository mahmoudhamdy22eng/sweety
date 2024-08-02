import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successcart',
  templateUrl: './successcart.component.html',
  styleUrls: ['./successcart.component.css']
})
export class SuccesscartComponent {

  constructor(public dialogRef: MatDialogRef<SuccesscartComponent>, private router: Router) { }

  onContinue(): void {
    this.dialogRef.close();
    this.router.navigate(['/products']);
  }
}