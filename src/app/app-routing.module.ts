import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';

const routes: Routes = [
  {path: 'best', component: HackerNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
