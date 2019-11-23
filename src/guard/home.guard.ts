import { Injectable } from "@angular/core";
import { CanActivate, Router, CanDeactivate } from '@angular/router';
import { LoginService } from 'src/service/login/login.service';

@Injectable({
    providedIn: 'root'
})

export class HomeGuard implements CanActivate{
    constructor (private loginService: LoginService, private router: Router) {}

    canActivate() {
        let isLogin = this.loginService.getIsLogin();

        if (isLogin === false || isLogin === undefined) this.router.navigate(['/login']);
        
        return isLogin;
    }
}