import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'configs/config';
import { Observable } from 'rxjs';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(process.env.API_KEY);
    const authReq = request.clone({
      headers: new HttpHeaders({
        'X-Api-Key': config.apiKey
      })
    });
    console.log(authReq);
    return next.handle(authReq);
  }
}
