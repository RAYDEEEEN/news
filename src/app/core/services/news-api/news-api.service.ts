import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@shared/enums/category.enum';
import { Country } from '@shared/enums/country.enum';
import { Language } from '@shared/enums/language.enum';
import { ResultSourceApi } from '@shared/interfaces/source.interface';
import { Observable } from 'rxjs';

@Injectable()
export class NewsApiService {
  constructor(private httpClient: HttpClient) {}

  getSources(
    category?: Category,
    language = Language.Fr,
    country = Country.Fr
  ): Observable<ResultSourceApi> {
    let params = new HttpParams();
    if (category) params = params.append('category', category);
    if (language) params = params.append('category', language);
    if (country) params = params.append('country', country);
    return this.httpClient.get<ResultSourceApi>(
      'https://newsapi.org/v2/top-headlines/sources',
      { params }
    );
  }
}
