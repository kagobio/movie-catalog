import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'TU_API_KEY'; // Sustituye con tu clave de API

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
  }

  getMovieDetails(movieId: number) {
    return this.http.get(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`
    );
  }
}
