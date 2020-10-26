import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { DanceBasic } from './danceBasic/danceBasic';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  private configUrl = 'http://localhost:3000/basic'; // URL to web api

  constructor(private http: HttpClient) { }
  
  getAdverts(categoryName: string): Observable<DanceBasic[]> {
  let categoryNameParameter = new HttpParams().set('category', categoryName); //to dodalam - do URLa zostanie dany paramter o nazwie category z nazwa kategorii
  return this.http.get<DanceBasic[]>(this.configUrl, {params: categoryNameParameter});
  } }
