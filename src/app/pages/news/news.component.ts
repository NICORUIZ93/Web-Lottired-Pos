import { Component } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  news: News[];
  
  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsData().subscribe((data) => {
      this.news = data;
    });
  }
}
