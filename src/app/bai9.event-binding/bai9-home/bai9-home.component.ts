import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai9-home',
  templateUrl: './bai9-home.component.html',
  styleUrls: ['./bai9-home.component.css']
})
export class Bai9HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count:number = 0;

  countClick = () => this.count++;
}
