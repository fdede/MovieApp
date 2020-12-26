import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { SearchResults } from '../SearchResults';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchResults: SearchResults;

  constructor(private movieService: MovieService) {
    this.searchResults = new SearchResults();
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.movieService.getData()
      .subscribe(r => {
        this.searchResults = r;
      });
  }

  onClickPage($event): void {
    console.log($event.target.textContent);

    this.movieService.getData($event.target.textContent).subscribe(r => this.searchResults = r);
  }

  sumUp(overview: string): string {
    return overview.substr(1, 220);
  }
}
