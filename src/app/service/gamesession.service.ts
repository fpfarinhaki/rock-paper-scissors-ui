import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gamesession } from '../domain/gamesession';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesessionService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/games/rps"
  }

  public playARound(): Observable<Gamesession> {
      return this.http.get<Gamesession>(this.url + '/round/play');
  }

}
