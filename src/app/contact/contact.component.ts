import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  successMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  sendContactForm(): void {
    this.successMessage = 'Your message has been sent successfully!';
    this.contactData = { name: '', email: '', message: '' };
  }
}
