import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hacker-news-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public static MAX_DISPLAY_PAGES = 5;
  public static BOUND_TO_TRANSFORM = 3;

  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Input() updateData: Function;

  displayablePages: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentPage || changes.totalPages) {
      this.updateDisplayablePages();
    }
  }

  //pagination
  updateDisplayablePages() {
    if (this.currentPage > this.totalPages) {
      return;
    }
    // init displayable pages
    this.displayablePages = [];
    if (this.displayablePages.length == 0 && this.totalPages > 0) {
      let sizeOfPages = Math.min(this.totalPages, PaginationComponent.MAX_DISPLAY_PAGES);

      for (let i = 1; i <= sizeOfPages; ++i) {
        this.displayablePages.push(i);
      }
    }

    if (this.displayablePages.length > 0) {
       let amountTransform = this.currentPage - PaginationComponent.BOUND_TO_TRANSFORM + 1;

      if (amountTransform > 0) {
         let numberForAdding = 0;
        for (let i = 0; i < this.displayablePages.length; ++i) {
          if (this.displayablePages[i] + amountTransform > this.totalPages) {
            numberForAdding = this.displayablePages.length - i;
            this.displayablePages.splice(i, numberForAdding);
            break;
          }
          this.displayablePages[i] += amountTransform;
        }

        for (let i = 0; i < numberForAdding; ++i) {
          this.displayablePages.unshift(this.displayablePages[0] - 1);
        }
      }
    }
  }

  goToPage(index: number) {
    this.currentPage = index;
    this.updateData(this.currentPage);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.updateData(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
    this.updateData(this.currentPage);
  }

}
