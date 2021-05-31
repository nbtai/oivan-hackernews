import { Location } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, map } from 'rxjs/operators';
import { ArticleModel } from 'src/app/model/article.model';
import { IwaTestService } from 'src/app/services/iwa-test.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public article: ArticleModel;
  private url: string;

  @Output()
  isLoading: boolean;

  constructor(
    private _iwaTestService: IwaTestService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.url = this._activatedRoute.snapshot.queryParams['url'];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.article = new ArticleModel();
    this.fetchArticile();
  }

  fetchArticile() {
    if (this.url) {
      this._iwaTestService.getArticle(this.url)
        .pipe(
          map(res => res.data.article),
          catchError(err => this._iwaTestService.handleError(err)),
          finalize(() => this.isLoading = false)
        )
        .subscribe(
          data => {
            this.article = new ArticleModel(data);
          }
        );
    }
  }

  goBack() {
    this._location.back();
  }
}
