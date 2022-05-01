import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Medico } from '../_model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {


  private url: string = `${environment.HOST}/medicos`;

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Medico[]>(this.url);
  }
}
