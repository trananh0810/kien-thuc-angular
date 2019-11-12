import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8-binding-style',
  templateUrl: './bai8-binding-style.component.html',
  styleUrls: ['./bai8-binding-style.component.css']
})
export class Bai8BindingStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOK:boolean = true;

  bgBlack:string = 'black';

  bgGreen:string = 'green';
}
