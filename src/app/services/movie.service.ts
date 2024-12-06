import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '30f42e55704d7bcd1c77507a667541a6';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMovieDetails(id: string) {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
  }

  getMoviesByGenre(genreId: string) {
    return this.http.get(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`
    );
  }

  getGenres() {
    return this.http.get(
      `${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`
    );
  }

  addToFavorites(movie: any): void {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  removeFromFavorites(id: string): void {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter((movie: any) => movie.id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
