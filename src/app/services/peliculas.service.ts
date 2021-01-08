import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movies } from '../interfaces/cartelera-response';
import { Cast, Credits } from '../interfaces/credits';
import { Genre, GenreElement } from '../interfaces/genre';
import { MovieDetails } from '../interfaces/movie-details';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public isLoadig = false;

  constructor( private http: HttpClient) { }

  get params(){
    return {
      api_key : '7dcfbc663d7e47cd64905f6ecd456b2d',
      language: 'es-ES',
      page    : this.carteleraPage.toString()    
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movies[]>{
    
    if (this.isLoadig) {
      // cargando peliculas
      return of([]);
    }
    
    this.isLoadig = true;
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap(() => {
        this.carteleraPage +=1;
        this.isLoadig = false;
      })
    )
  }

  searchMovies(texto:string):Observable<Movies[]>{
    const params = {...this.params, page: '1', query: texto};

    //https://api.themoviedb.org/3/search/movie
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results)
    )
  }

  getMovieDetails(id: string){

    return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    }).pipe(
      catchError(err => of(null))
    );
  }

  getCredits(id: string):Observable<Cast[]>{
    // https://api.themoviedb.org/3/movie/347158/credits?api_key=7dcfbc663d7e47cd64905f6ecd456b2d&language=es-ES

    return this.http.get<Credits>(`${this.baseUrl}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map( resp => resp.cast),
      catchError(err => of([]))
    );
  }
  getGenre():Observable<GenreElement[]>{
    // https://api.themoviedb.org/3/genre/movie/list?api_key=7dcfbc663d7e47cd64905f6ecd456b2d&language=es-ES

    return this.http.get<GenreElement[]>(`${this.baseUrl}/genre/movie/list`,{
      params: this.params
    }).pipe(
      map(resp => resp),
      catchError(err => of([]))
      

    )
  }
}
