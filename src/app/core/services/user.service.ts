import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserI } from '../interfaces/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get<UserI[]>(`${environment.urlApi}users`);
  }

  public register(user: UserI) {
    return this.http.post<UserI>(`${environment.urlApi}users`, user);
  }

  public delete(id: number) {
    return this.http.delete<UserI>(`${environment.urlApi}users/${id}`);
  }
}
