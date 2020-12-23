import { Component, OnInit } from '@angular/core';
import { MovieService, SearchResults } from '../movie.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  moviesResults;
  totalPages;
  page;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieService.getData()
      .subscribe(r => {
        this.moviesResults = r.results;
        this.totalPages = r.total_pages;
        this.page = r.page;
      });
  }

  onClickPage($event): void {
    console.log($event.target.textContent);

    this.movieService.getData($event.target.textContent).subscribe(r => this.moviesResults = r.results);
  }

  sumUp(overview: string): string {
    return overview.substr(1, 220);
  }
}
