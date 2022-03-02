import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const BASE_URL: string = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get = (
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> => {
    var options = this.getOptions();
    options.params = params;
    return this.httpClient
      .get(BASE_URL + path, options)
      .pipe(catchError(this.formatErrors));
  };

  post = (
    path: string,
    body: object = {},
    options = this.getOptions()
  ): Observable<any> => {
    return this.httpClient
      .post(BASE_URL + path, JSON.stringify(body), options)
      .pipe(catchError(this.formatErrors));
  };

  formatErrors = (error: any): Observable<any> => {
    if (!environment.production) {
      console.log(error);
    }
    return throwError(error);
  };

  getOptions = (): any => {
    var options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return options;
  };
}
