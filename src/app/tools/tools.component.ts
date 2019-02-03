import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  public apiKey: string = '7a67c40c89ea4952830387b8f9e5090e';
  public url: string = 'https://newsapi.org/v2/sources?apiKey=';

  public allSources:any[];

  async getAllSources(sourcesUrl: string) {
    let response = await fetch(sourcesUrl);
    let responseJson = await response.json();
    this.allSources = responseJson.sources;
    
  }

  constructor() { }

  ngOnInit() {
    this.getAllSources(this.url + this.apiKey);
  }

}
