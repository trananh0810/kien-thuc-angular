import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private lessions = [
    { name: "Bài 7 - One way binding", path: "bai7" },
    { name: "Bài 8 - Binding Class và Binding Style", path: "bai8" },
    { name: "Bài 9 - Event Binding", path: "bai9" },
    { name: "Bài 10 - Two way binding", path: "bai10" },
    { name: "Bài 11 - Structural Directive", path: "bai11" },
    { name: "Bài 12- Attributes Directive", path: "bai12" },
    { name: "Bài 13 - Tương tác các component", path: "bai13" },
    { name: "Bài 14 - Pipes", path: "bai14" },
    { name: "Bài 15 - Form", path: "bai15" },
    // { name: "Bài 16+17 - Validate Form", path: "bai16" },
    { name: "Bài 18 - Http Service", path: "bai18" },
    { name: "Bài 21 - Routing", path: "bai21" }
  ]

}
