import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public apiKey: string = '7a67c40c89ea4952830387b8f9e5090e';
  public url: string = 'https://newsapi.org/v2/sources?apiKey=';

  public allSources:any[];
  public selectedLevel: any;
  public filteredArticles: any[] = [];
  public currentSource: string;

  async getAllSources(sourcesUrl: string) {
    let response = await fetch(sourcesUrl);
    let responseJson = await response.json();
    this.allSources = responseJson.sources;
    
  }

  @Output() selectSource = new EventEmitter<string>();
  @Output() searchArticles = new EventEmitter<any>();

  @Input() articles: any[];

  getListItem(item: any) {
    this.selectSource.emit(item);
    this.currentSource = item;
  }

  search(value: string) {
    this.filteredArticles.length = 0;
    if (value == "") {
      this.getListItem(this.currentSource);
      return;
    }
    for (let i = 0; i < this.articles.length; i++) {
      let mark = this.articles[i].title.search(value);
      if (mark != -1) {
        this.filteredArticles.push(this.articles[i]);
      }
    }
    this.searchArticles.emit(this.filteredArticles);
    return;
  }

  constructor() { }

  ngOnInit() {
    this.getAllSources(this.url + this.apiKey);
  }

}
