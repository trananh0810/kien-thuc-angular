import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panigation',
  templateUrl: './panigation.component.html',
  styleUrls: ['./panigation.component.css']
})
export class PanigationComponent implements OnInit {
  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;
  @Input() activePage: number = 1;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  public pages: any[] = [];
  private pageCount: number;

  ngOnInit() {
    // this.pages = this.getArrayOfPage(this.pageCount, this.activePage);
  }

  ngOnChanges() {
    this.pageCount = this.getPageCount();
    this.pages = this.getArrayOfPage(this.pageCount, this.activePage);
    this.onPageChange.emit(1);
  }

  private getPageCount(): number {
    let totalPage: number = 0;

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }

    return totalPage;
  }

  private getArrayOfPage(pageCount: number, startPage: number): any[] {
    let pageArray: any[] = [];

    if (pageCount === 0) {
      return pageArray;
    }

    if (pageCount < 10) {
      for (var i = 1; i <= pageCount; i++) {
        pageArray.push(i);
      }
      return pageArray;
    }

    pageArray.push(1);

    if (startPage < 3) {
      for (let i = startPage; i <= pageCount; i++) {
        if (i === 1) continue;
        if (i < startPage + 4) {
          pageArray.push(i);
        } else {
          pageArray.push('...');
          pageArray.push(pageCount);
          break;
        }
      }

      return pageArray;
    }

    if (startPage >= 3 && startPage < pageCount - 4) {
      if (startPage >= 4) {
        pageArray.push('...');
      }
      
      for (let i = startPage-1; i <= pageCount; i++) {
        if (i < startPage + 4) {
          pageArray.push(i);
        } else {
          pageArray.push('...');
          pageArray.push(pageCount);
          break;
        }
      }

      return pageArray;
    }

    pageArray.push('...');

    for (let i = pageCount - 5; i <= pageCount; i++) {
      pageArray.push(i);
    }

    return pageArray;
  }

  changePage(pageNumber: any) {
    if (pageNumber === '...') {
      return;
    }

    if (pageNumber < 1) return;
    if (pageNumber > this.pageCount) return;
    this.activePage = pageNumber;
    this.onPageChange.emit(this.activePage);

    this.pages = this.getArrayOfPage(this.getPageCount(), pageNumber);
  }
}
