import { Movie } from "./movie";

export class SearchResults {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}