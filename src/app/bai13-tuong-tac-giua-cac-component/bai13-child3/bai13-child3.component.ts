import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai13-child3',
  templateUrl: './bai13-child3.component.html',
  styleUrls: ['./bai13-child3.component.css']
})
export class Bai13Child3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertInfo = () => alert('Gọi phương thức component con từ component cha thành công!!!');
}
