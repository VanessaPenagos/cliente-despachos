import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Despacho } from '../model/despacho';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  constructor(protected http: HttpService) { }

  public buscar(id:number) {
    return this.http.doGet<Despacho>(`${environment.endpoint}/despachos/${id}`, this.http.optsName('consultar despacho'));
  }

  public crear(despacho: Despacho){
    console.log(despacho)
    return this.http.doPost<Despacho, boolean>(`${environment.endpoint}/despachos`, despacho, this.http.optsName('crear despacho'));
  }

  public actualizar(despacho: Despacho){
    return this.http.doPut<Despacho, boolean>(`${environment.endpoint}/despachos/${despacho.id}`, despacho, this.http.optsName('editar despacho'));
  }


}