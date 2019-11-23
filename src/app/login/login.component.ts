import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messErrUser: string;
  messErrPass: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login = (data) => {
    let result = this.loginService.checkInfoLogin(data);
    
    this.messErrUser = result.messErrUser;
    this.messErrPass = result.messErrPass;

    if (result.isSuccess === true) this.router.navigate(['']);
  }
}
