import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private popularApiUrl: string;
  private movieDetailApiUrl: string;
  private apiKey: string;
  private page: string;
  private params: HttpParams;
  private language: string;

  constructor(private http: HttpClient) {
    this.popularApiUrl = 'https://api.themoviedb.org/3/movie/popular';
    this.movieDetailApiUrl = 'https://api.themoviedb.org/3/movie/';
    this.apiKey = 'dffca6eaeccbc0cd8edc34e5d9d182f5';
    this.page = "1";
    this.language = "en-US";
  }

  getData(page?: string, language?: string): Observable<SearchResults> {
    page = page || this.page;
    language = language || this.language;

    this.params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('language', language)
    .set('page', page);

    return this.http.get<SearchResults>(this.popularApiUrl, { params: this.params });
  }

  getMovie(movie_id: number, language?: string): Observable<SearchResults> {
    language = language || this.language;

    this.params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('language', language);

    this.movieDetailApiUrl += movie_id.toString();

    return this.http.get<SearchResults>(this.movieDetailApiUrl, { params: this.params});
  }

}

export interface SearchResults {
  total_results: number;
  results: Array<object>;
  page: number;
  total_pages: number;
}