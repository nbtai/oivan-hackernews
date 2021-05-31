import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hacker-news-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input()
  public isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
