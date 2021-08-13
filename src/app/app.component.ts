import { Component } from '@angular/core';
import { NewsApiService } from '@core/services/news-api/news-api.service';
import { Category } from '@shared/enums/category.enum';
import { Country } from '@shared/enums/country.enum';
import { Language } from '@shared/enums/language.enum';
import { ResultSourceApi } from '@shared/interfaces/source.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private newsApiService: NewsApiService) {
    newsApiService
      .getSources(Category.General, Language.Fr, Country.Fr)
      .subscribe((results: ResultSourceApi) => {
        console.log(results.sources);
      });
  }
}
