import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public apiKey: string = '7a67c40c89ea4952830387b8f9e5090e';
  public url: string = 'https://newsapi.org/v2/everything?q=';
  public allArticles: any[];
  public selectedSource: string = 'abc-news';

  async getNews (source: string) {
    const responce = await fetch(this.url + source + '&apiKey=' + this.apiKey);
    const responseJson = await responce.json();
    this.allArticles = responseJson.articles;
  }

  onChanged(item: any) {
    this.selectedSource = item;
    this.getNews(this.selectedSource);
  }

  constructor() { }

  ngOnInit() {
    this.getNews(this.selectedSource);
  }

}
