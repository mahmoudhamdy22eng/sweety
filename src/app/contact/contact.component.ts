import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loading = false;
  errorMessage = '';
  sentMessage = '';

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.sentMessage = '';

    // Simulate form submission
    setTimeout(() => {
      this.loading = false;
      this.sentMessage = 'Your message has been sent. Thank you!';
    }, 2000);
  }
}