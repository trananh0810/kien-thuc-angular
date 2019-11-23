import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-bai21-home',
  templateUrl: './bai21-home.component.html',
  styleUrls: ['./bai21-home.component.css']
})
export class Bai21HomeComponent implements OnInit {
  // private page: number = 1;
  // private pageSize: number = 5;
  private activePage: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.activePage = params.page || 1);
  }

  onRedirect = () => {
    this.router.navigate(['bai7']);
  }

  changePage = data => console.log(data);

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;

    this.activatedRoute.queryParams.subscribe(params => {
    })
  }
}
