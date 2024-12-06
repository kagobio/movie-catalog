import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.movieService.getFavorites();
  }

  removeFavorite(movieId: string): void {
    this.movieService.removeFromFavorites(movieId);
    this.favoriteMovies = this.movieService.getFavorites();
  }
}
