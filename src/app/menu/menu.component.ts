import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  private lessions = [
    { name: 'One way binding', path: 'bai7' },
    { name: 'Binding Class và Binding Style', path: 'bai8' },
    { name: 'Event Binding', path: 'bai9' },
    { name: 'Two way binding', path: 'bai10' },
    { name: 'Structural Directive', path: 'bai11' },
    { name: 'Attributes Directive', path: 'bai12' },
    { name: 'Tương tác các component', path: 'bai13' },
    { name: 'Pipes', path: 'bai14' },
    { name: 'Form', path: 'bai15' },
    // { name: "Bài 16+17 - Validate Form", path: "bai16" },
    { name: 'Http Service', path: 'bai18' },
    { name: 'Routing', path: 'bai21' },
    { name: 'Children Route', path: 'bai24/1' },
    { name: 'Route Guard', path: 'bai25' }
  ];

  ngOnInit() {
  }

  logout = () => {
    this.loginService.setIsLogin(false);
    this.router.navigate(['login']);
  }
}
