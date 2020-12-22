import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies;

  constructor(private movieService: MovieService) {
    // this.getMovie();
  }

  getMovie(): void {
    this.movieService.getData()
      .subscribe(r => {
        this.movies = r.results;
      });
  }

}