import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  personalInfo = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getPersonalInfo().subscribe((info) => {
      this.personalInfo = info;
    });
  }

  updatePersonalInfo(): void {
    this.accountService
      .updatePersonalInfo(this.personalInfo)
      .subscribe((response) => {
        console.log('Personal info updated successfully', response);
      });
  }
}
