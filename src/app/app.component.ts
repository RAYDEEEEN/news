import { Component } from '@angular/core';
import { NewsApiService } from '@core/services/news-api/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private newsApiService: NewsApiService) {
    newsApiService.getSources().subscribe(res => {
      console.log(res);
    });
  }
}
