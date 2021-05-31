import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './hacker-news/article-detail/article-detail.component';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';

const routes: Routes = [
  {path: 'best', component: HackerNewsComponent},
  {path: 'article', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
