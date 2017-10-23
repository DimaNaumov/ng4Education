import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authorized: boolean;
  token: string;
  login: string;
  password: string;
  hide: boolean; 

  constructor(private authService: AuthService) {
    this.hide = true;
    this.token = null;
    this.login = "";
    this.password = "";
   }

  ngOnInit() {
    this.authorized = this.authService.isAuthorized();
  }

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  sendCredentials() {
    this.authService.tryToAuthSlowly(this.login, this.password)
      .then(responce => this.token = responce.token)
      .catch(error => this.token = error);
  }

}
