import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bai13-child',
  templateUrl: './bai13-child.component.html',
  styleUrls: ['./bai13-child.component.css']
})
export class Bai13ChildComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:no-input-rename
  @Input('date') currentDate: string;

  ngOnInit() {
  }
}
