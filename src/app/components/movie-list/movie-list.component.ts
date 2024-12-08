import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';
  genres: any[] = [];
  selectedGenre: string = '';
  currentYear: number = new Date().getFullYear();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });

    this.movieService.getGenres().subscribe((data: any) => {
      this.genres = data.genres;
    });
  }

  searchMovies(): void {
    if (this.searchQuery.trim()) {
      this.movieService
        .searchMovies(this.searchQuery)
        .subscribe((data: any) => {
          this.movies = data.results;
        });
    }
  }

  filterByGenre(): void {
    if (this.selectedGenre) {
      this.movieService
        .getMoviesByGenre(this.selectedGenre)
        .subscribe((data: any) => {
          this.movies = data.results;
        });
    }
  }

  addFavorite(movie: any): void {
    this.movieService.addToFavorites(movie);
    alert(`${movie.title} añadido a favoritos`);
  }
}
