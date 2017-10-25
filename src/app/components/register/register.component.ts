import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  login: string;
  password: string;
  password2: string;
  showPassword: boolean; 
  showPassword2: boolean;

  constructor() {
    this.showPassword = true;
    this.showPassword2 = true; 
    this.login = "";
    this.password = "";
    this.password2 = this.password;
  }

  ngOnInit() {
  }
  register() {

  }
}
