import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments.prod';

@Injectable({providedIn: 'root'})
export class HeroesService {


  private baseUrl: string = environments.baseUrl;

  queryResults = ''

  constructor(
    private http: HttpClient
  ) { }


  getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById( id: string ): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  getSuggestions( query: string ): Observable<Hero[]> {

    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }`);

  }


  addHero(hero : Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw new Error('The hero must have an id');
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError( error => of(false) ),
        map( () => true )
      );
  }
}
