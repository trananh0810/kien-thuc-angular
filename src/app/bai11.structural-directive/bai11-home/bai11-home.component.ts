import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai11-home',
  templateUrl: './bai11-home.component.html',
  styleUrls: ['./bai11-home.component.css']
})
export class Bai11HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

  btnName:string = "Click to hide"

  isDisplay:boolean = true;

  click = () => {
    this.isDisplay = !this.isDisplay;

    if(this.isDisplay) this.btnName = "Click to hide"
    else this.btnName = "Click to show";
  }

  color:string = 'blue';

  colors:string[] = ['blue', 'green', 'yellow', 'black'];
}
