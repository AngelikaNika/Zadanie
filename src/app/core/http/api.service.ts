import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, catchError, retry } from 'rxjs/operators';
import { Dance } from 'src/app/shared/models/dance';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDances(): Observable<Dance[]> {
    return this.http.get<Dance[]>('http://localhost:3000/dancesdata').pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        return of([]);
      }),
      share());
  }
  getDancesByTitle(title: string): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?title_like=${title}`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        return of([]);
      }),
      share());
  }

  getDanceDetails(danceId: number): Observable<Dance> {
    return this.http.get<Dance>(`http://localhost:3000/dancesdata/${danceId}`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        throw new Error('Zrób coś ze mną.');
      }),
      share());
  }

  getSortByPriceAsc(): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?_sort=price&status=aktywny&_order=asc`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        throw new Error('Zrób coś ze mną.');
      }),
      share());
  }
  getSortByPriceDesc(): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?_sort=price&status=aktywny&_order=desc`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        throw new Error('Zrób coś ze mną.');
      }),
      share());
  }

  getSortByDateAsc(): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?_sort=date&status=aktywny&_order=asc`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        throw new Error('Zrób coś ze mną.');
      }),
      share());
  }
  getSortByDateDesc(): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?_sort=date&status=aktywny&_order=desc`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        throw new Error('Zrób coś ze mną.');
      }),
      share());
  }

  saveDance(dance: Dance) {
    return this.http.post('http://localhost:3000/dancesdata', dance).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        return of(null);
      }),
      share());
  }
  getDanceByStatus(status: string): Observable<Dance[]> {
    return this.http.get<Dance[]>(`http://localhost:3000/dancesdata?status=${status}`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        return of([]);
      }),
      share());
  }

  getUser(login: string, password: string): Observable<User> {

    return this.http.get<User>(`http://localhost:3000/usersdata?login=${login}&password=${password}`).pipe(
      retry(3),
      catchError(error => {
        console.log(error);
        return of(null);
      }),
      share());
  }

}
