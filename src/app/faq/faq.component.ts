import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs: any[] = [
    {
      id: 1,
      question: 'What is Sweetsshop?',
      answer:
        'Sweetsshop is your go-to place for a wide variety of delicious sweets.',
    },
    {
      id: 2,
      question: 'Where are you located?',
      answer: 'We are located at 123 Sweet Street, Cairo, Egypt.',
    },
    {
      id: 3,
      question: 'Do you offer home delivery?',
      answer: 'Yes, we offer home delivery across Cairo.',
    },
    {
      id: 4,
      question: 'What are your working hours?',
      answer: 'We are open from 9 AM to 9 PM, Monday to Saturday.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
