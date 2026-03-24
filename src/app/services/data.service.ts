import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vivienda } from '../models/vivienda.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getViviendas(): Observable<Vivienda[]> {
    return this.http.get<Vivienda[]>(this.api);
  }
}