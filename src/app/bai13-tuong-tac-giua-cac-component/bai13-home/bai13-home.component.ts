import { Component, OnInit, ViewChild } from '@angular/core';
import {Bai13Child3Component} from '../bai13-child3/bai13-child3.component';

@Component({
  selector: 'app-bai13-home',
  templateUrl: './bai13-home.component.html',
  styleUrls: ['./bai13-home.component.css']
})
export class Bai13HomeComponent implements OnInit {

  constructor() { }

  dataFromChild = '';

  @ViewChild(Bai13Child3Component, {static: false}) private child3Component: Bai13Child3Component;

  ngOnInit() {
  }

  getData = event => {
    this.dataFromChild = event;
  }

  callMethodChild3 = () => this.child3Component.alertInfo();
}
