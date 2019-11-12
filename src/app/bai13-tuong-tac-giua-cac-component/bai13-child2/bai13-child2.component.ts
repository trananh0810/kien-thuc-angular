import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bai13-child2',
  templateUrl: './bai13-child2.component.html',
  styleUrls: ['./bai13-child2.component.css']
})
export class Bai13Child2Component implements OnInit {

  constructor() { }

  // tslint:disable-next-line:no-output-rename
  @Output('data') sender = new EventEmitter<string>();

  ngOnInit() {
  }
  click = () => {
    this.sender.emit('Gửi thành công!!!');
  }
}
