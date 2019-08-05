import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {FilmLocation} from '../model/FilmLocation';
import {catchError, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {FilmLocationResponse} from '../rest/response/FilmLocationResponse';


@Injectable({
  providedIn: 'root'
})
export class FilmLocationService {

  constructor(
    private http: HttpClient
  ) { }

  /** GET all filmLocations from the server */
  getFilmLocations(): Observable<FilmLocationResponse> {
    return this.http.get<FilmLocationResponse>(`${environment.apiURL}/filmLocations`)
      .pipe(
        tap(_ => this.log('fetched filmLocations')),
        catchError(this.handleError<FilmLocationResponse>('getFilmLocations', null))
      );
  }

  /** GET filmLocations (filtered by title) from the server */
  searchFilmLocationsByTitle(title: string): Observable<FilmLocationResponse> {
    const options = title ? { params: new HttpParams().set('title', title) } : {};
    return this.http.get<FilmLocationResponse>(`${environment.apiURL}/filmLocations/search`, options)
      .pipe(
        tap(_ => this.log('fetched filmLocations')),
        catchError(this.handleError<FilmLocationResponse>('getFilmLocations', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    // TODO: log the error message
  }
}
