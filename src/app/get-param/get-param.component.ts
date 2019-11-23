import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-param',
  templateUrl: './get-param.component.html',
  styleUrls: ['./get-param.component.css']
})
export class GetParamComponent implements OnInit {
  private id1: number;
  private id2: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id1 = params.id1;
      this.id2 = params.id2;
    });
  }

}
