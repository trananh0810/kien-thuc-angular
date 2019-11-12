import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai15-home',
  templateUrl: './bai15-home.component.html',
  styleUrls: ['./bai15-home.component.css']
})
export class Bai15HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name:string;
  email: string;
  phone: string;

  onSubmit = data => {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
  };
  
}
