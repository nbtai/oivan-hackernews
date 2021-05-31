import { BaseModel } from "./base.model";

export class ArticleModel extends BaseModel {
  private _content: string;
  private _coverImageUrl: string;
  private _description: string;
  private _subtitle: string;
  private _title: string;
  private _url: string;

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get coverImageUrl(): string {
    return this._coverImageUrl;
  }

  set coverImageUrl(value: string) {
    this._coverImageUrl = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get subtitle(): string {
    return this._subtitle
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string {
    return this._url
  }

  set url(value: string) {
    this._url = value;
  }
}
