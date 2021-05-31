import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IwaTestService {

  private iwaUrl = 'https://iwa-test.herokuapp.com/graphql';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    ) { }

  /** GET articles from the iwa test endpoint */
  getArticles(pageNumber: number): Observable<ArticlesResult> {
    const body = { query: `{articles(pageNumber: ${pageNumber}) {content, coverImageUrl, description, subtitle, title, url} }` };

    return this.http.post<ArticlesResult>(this.iwaUrl, body);
  }

  /** GET article detail from the iwa test endpoint */
  getArticle(url: string): Observable<ArticleResult> {
    const body = { query: `{article(url: \"${url}\") {content, coverImageUrl, description, subtitle, title, url} }` };
    return this.http.post<ArticleResult>(this.iwaUrl, body)
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}

interface ArticleResult {
  data: {
    article: {
      content: string
    };
  };
}

interface ArticlesResult {
  data: {
    articles: Object[]
  };
}
