import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai12-home',
  templateUrl: './bai12-home.component.html',
  styleUrls: ['./bai12-home.component.css']
})
export class Bai12HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fullName:string = "";
  fullName2:string = "";

  bgNgStyle:string = '#f8d7da';

  changeValue = (event) => {
    if(event.target.value.length >= 5) {
      this.bgNgStyle = "#d4edda";
    } else {
      this.bgNgStyle = "#f8d7da";
    }
  }
}
