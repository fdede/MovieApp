import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiMoviesUrl: string;
  private apiKey: string;
  private page: string;
  private params: HttpParams;
  private language: string;

  constructor(private http: HttpClient) {
    this.apiMoviesUrl = 'https://api.themoviedb.org/3/movie/popular';
    this.apiKey = 'dffca6eaeccbc0cd8edc34e5d9d182f5';
    this.page = '2';
    this.language = "en-US";

    this.params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('language', this.language)
    .set('page', this.page);
  }

  getData(): Observable<SearchResults> {
    return this.http.get<SearchResults>(this.apiMoviesUrl, { params: this.params });
  }

}

interface SearchResults {
  total_results: number;
  results: Array<object>;
}