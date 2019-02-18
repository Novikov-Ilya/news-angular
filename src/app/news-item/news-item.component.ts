import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  private id: any;
  private source: string;

  public apiKey: string = '7a67c40c89ea4952830387b8f9e5090e';
  public url: string = 'https://newsapi.org/v2/everything?q=';
  public allArticles: any[];

  public async getNews (source: string) {
    const responce = await fetch(this.url + source + '&apiKey=' + this.apiKey);
    const responseJson = await responce.json();
    this.allArticles = responseJson.articles;
  }

  getSelectedNews() {
    
  }

  private subscribtion: Subscription;
  private subscribtion1: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscribtion = activateRoute.params.subscribe(params => this.id = params['id']);
    this.subscribtion1 = activateRoute.params.subscribe(params => this.source = params['source']);
   }

  ngOnInit() {
    this.getNews(this.source);
  }

}
