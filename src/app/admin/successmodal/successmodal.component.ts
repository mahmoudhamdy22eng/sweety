import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.component.html',
  styleUrls: ['./successmodal.component.css']
})
export class SuccessmodalComponent {

  constructor(public dialogRef: MatDialogRef<SuccessmodalComponent>, private router: Router) { }

  onContinue(): void {
    this.dialogRef.close();
    this.router.navigate(['/admin']);
  }
}
