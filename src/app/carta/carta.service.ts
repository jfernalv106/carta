import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REST_URL } from '../constantes';
import { Categorias, Menus } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class CartaService {

  constructor(private http: HttpClient) { }

  buscarMenu(categoria:string): Observable<Menus> {
    let url = `${REST_URL}/api/menu?`;
    if (categoria != '') {
        url += `categoria=${categoria}&`;
    }
    return this.http.get<Menus>(url);
  }
  buscarCategoria(tipo:string): Observable<Categorias> {
    let url = `${REST_URL}/api/categoria?`;
    if (tipo != '') {
        url += `tipo=${tipo}&`;
    }

    return this.http.get<Categorias>(url);

  }
}
