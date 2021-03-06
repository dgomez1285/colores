import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from './color.model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  constructor(private http: HttpClient) { }

  listadoColores(): Observable<Color[]> {
    return this.http.get<Color[]>(baseUrl);
  }

  obtenerColor(id: number): Observable<Color[]> {
    return this.http.get<Color[]>(baseUrl+"/"+id);
  }
}
