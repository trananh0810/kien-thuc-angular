import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api.service';

@Component({
  selector: 'app-bai18-home',
  templateUrl: './bai18-home.component.html',
  styleUrls: ['./bai18-home.component.css']
})
export class Bai18HomeComponent implements OnInit {
  private users = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((respone: any) => this.users = respone);
  }
}
