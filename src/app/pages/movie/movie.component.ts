import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast, Credits } from 'src/app/interfaces/credits';
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public pelicula: MovieDetails;
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {
    // const id =  this.activatedRoute.snapshot.params.id;
    
    // otra forma de extraer el id es através de la des estructuración
    const {id} =  this.activatedRoute.snapshot.params;

    combineLatest([
      this.peliculasService.getMovieDetails(id),
      this.peliculasService.getCredits(id)

    ]).subscribe(([movie, cast]) => {
      // console.log(movie, cast);
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      // console.log(movie);
      this.pelicula = movie;      
      this.cast = cast;

    })
    
    // this.peliculasService.getMovieDetails(id).subscribe(movie => {
      // if (!movie) {
      //   this.router.navigateByUrl('/home');
      //   return;
      // }
      // // console.log(movie);
      // this.pelicula = movie;
    // });
    
    // this.peliculasService.getCredits(id).subscribe( cast => {
    //   this.cast = cast;
    //   console.log(cast);
      
    // });
  }

  onReturn(){
    this.location.back();

  }

}
