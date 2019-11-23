import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bai24-tab1',
  templateUrl: './bai24-tab1.component.html',
  styleUrls: ['./bai24-tab1.component.css']
})
export class Bai24Tab1Component implements OnInit {
  idFromParent:number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe( params => {
      this.idFromParent = params.id;
    })
  }

}
