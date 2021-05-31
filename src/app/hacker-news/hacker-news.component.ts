import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, map } from 'rxjs/operators';
import { ArticleModel } from '../model/article.model';
import { IwaTestService } from '../services/iwa-test.service';
@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.scss']
})
export class HackerNewsComponent implements OnInit {
  public articles: ArticleModel[];
  public params = {
    page: '',
    pageNumber: 1,
  };

  @Output()
  isLoading: boolean;

  constructor(
    private _iwaTestService: IwaTestService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.isLoading = true;
      this.params.page = params.page ? params.page : 1;
      this.params.pageNumber = params.page? parseInt(params.page) : parseInt(this.params.page);
      this.fetchArticile();
    });
  }

  fetchArticile() {
    this.articles = [];
    this._iwaTestService.getArticles(this.params.pageNumber)
    .pipe(
      map(res => res.data.articles),
      catchError(err => this._iwaTestService.handleError(err)),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      data => {
        data.forEach(item => this.articles.push(item as any));
      }
    );
  }

  public goToPage(currentPage: number) {
    this.params.page = (currentPage).toString();
    this.changeRouter();
  }

  public changeRouter() {
    let paramsSearch = {
      page: this.params.page
    };

    this._router.navigate(['best'], {
      queryParams: paramsSearch
    });
  }
}
