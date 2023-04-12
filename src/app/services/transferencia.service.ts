import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private http: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  all(): Observable<Transferencia[]>{

    return this.http.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: any) {
    this.tratar(transferencia)
    return this.http.post<Transferencia>(this.url, transferencia)
  }

  private tratar(transferencia: any) {
    transferencia.data = new Date();
    transferencia.id = 0;
  }
}
