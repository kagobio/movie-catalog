import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service'; // Importa solo el servicio, sin otros componentes

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule, // Importar CommonModule para usar *ngFor y *ngIf
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    console.log('Componente inicializado');

    this.movieService.getPopularMovies().subscribe(
      (data: any) => {
        console.log('Películas recibidas:', data);
        this.movies = data.results;
      },
      (error) => {
        console.error('Error al cargar las películas:', error);
      }
    );
  }
}
