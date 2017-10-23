import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: string;
  login: string;
  password: string;
  showPassword: boolean; 
  inProgress: boolean;

  constructor(private authService: AuthService) {
    this.showPassword = true;
    this.token = null;
    this.login = "";
    this.password = "";
    this.inProgress = false;
   }

  ngOnInit() {
  }

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  signin() {
    this.inProgress = true;
    this.authService.tryToAuthSlowly(this.login, this.password)
      .then(responce => {
        this.token = responce.token; 
        this.inProgress = false;
      })
      .catch(error => {
        this.token = error;
        this.inProgress = false;
      });
  }

}
