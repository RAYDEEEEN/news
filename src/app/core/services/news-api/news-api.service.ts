import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsApiService {
  constructor(private httpClient: HttpClient) {}

  getSources(): Observable<any> {
    return this.httpClient.get(
      'https://newsapi.org/v2/top-headlines/sources?category=general&language=fr&country=fr'
    );
  }
}
