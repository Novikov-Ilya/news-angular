import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  async getAllSources(sourcesUrl: string) {
    let response = await fetch(sourcesUrl);
    let responseJson = await response.json();
    this.allSources = responseJson.sources;
    
  }

  @Output() selectSource = new EventEmitter<string>();

  getListItem(item: any) {
    this.selectSource.emit(item);
  }

  constructor() { }

  ngOnInit() {
    this.getAllSources(this.url + this.apiKey);
  }

}
