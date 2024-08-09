import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseURL = environments.baseUrl;
  private user? : User;


  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if ( !this.user ) return undefined;
    // StructuredClone funciona para clonar objetos, pero no clona funciones, clases, etc. Es como el spread operator pero para objetos más complejos.
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/1`)
    .pipe(
      tap(user => {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  checkAuth(): Observable<boolean> | boolean {
    if (!localStorage.getItem('user')) return false

    return this.http.get<User>(`${this.baseURL}/users/1`)
    .pipe(
      tap(user => {
        this.user = user;

      }),
      map(user => !!user)
    )

  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
