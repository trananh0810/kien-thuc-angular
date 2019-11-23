import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  setIsLogin = isLogin => localStorage.setItem('isLogin', isLogin);

  getIsLogin = () => (localStorage.getItem('isLogin') === 'true');

  checkInfoLogin = data => {
    let username = data.username;
    let pass = data.password;

    let isSuccess = true;
    let messErrUser = "";
    let messErrPass = "";

    if (username.trim().length === 0){
      isSuccess = false;
      messErrUser = "Vui lòng nhập tên đăng nhập!";
    }

    if (pass.trim().length === 0){
      isSuccess = false;
      messErrPass = "Vui lòng nhập mật khẩu!"
    }

    if (username !== "admin") {
      isSuccess = false;
      if (messErrUser.length === 0) messErrUser = "Tên đăng nhập sai!";
    }

    if (pass !== "123") {
      isSuccess = false;
      if (messErrPass.length === 0) messErrPass = "Mật khẩu sai!";
    }

    if (isSuccess === true) this.setIsLogin(isSuccess); 

    let result =  {
      isSuccess: isSuccess,
      messErrUser: messErrUser,
      messErrPass: messErrPass 
    }

    return result;
  }
}
