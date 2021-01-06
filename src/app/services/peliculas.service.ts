import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movies } from '../interfaces/cartelera-response';

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
}
