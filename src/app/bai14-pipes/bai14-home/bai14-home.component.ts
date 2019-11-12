import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai14-home',
  templateUrl: './bai14-home.component.html',
  styleUrls: ['./bai14-home.component.css']
})
export class Bai14HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentDate: Date = new Date();
}
