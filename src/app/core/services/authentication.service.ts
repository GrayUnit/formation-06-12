import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserI } from '../interfaces/user-i';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject$: BehaviorSubject<UserI>;
  public currentUser$: Observable<UserI>;
  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject$ = new BehaviorSubject<UserI>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser$ = this.currentUserSubject$.asObservable();
  }

  public currentUserValue(): UserI {
    return this.currentUserSubject$.value;
  }

  public login(username: string, password: string) {
    return this.http.post<any>(`${environment.urlApi}login`, {email: username, password: password}).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject$.next(user);
        return user;
      })
    )
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null!);
  }
}
