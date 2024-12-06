import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '30f42e55704d7bcd1c77507a667541a6';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }
}
