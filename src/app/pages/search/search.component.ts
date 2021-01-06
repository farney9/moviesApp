import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public busqueda: string = "";
  public movies: Movies[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {

      // console.log(params.texto);
      this.busqueda = params.texto

      this.peliculasService.searchMovies(params.texto).subscribe( movies => {
        this.movies = movies
        // console.log(movies);
        
      })
    })
  }

}
