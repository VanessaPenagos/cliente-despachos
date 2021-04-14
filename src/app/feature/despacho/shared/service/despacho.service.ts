import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Despacho } from '../model/despacho';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  Router } from '@angular/router';
import { Alerta } from '@shared/components/model/alerta';
import { AlertaService } from '@shared/components/service/alerta.service';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  public ErrorTitulo = "Error al buscar el despacho";
  public ErrorBuscar = "Despacho no encontrado";
  public ErrorCrear = "Despacho no creado";
  public alerta: Alerta;

  constructor(protected http: HttpService, private alertaService:AlertaService, protected router: Router) { }

  public buscar(id:number) {
    return this.http.doGet<Despacho>(`${environment.endpoint}/despachos/${id}`, this.http.optsName('consultar despacho')).pipe(
      catchError(e => {
        this.router.navigate(['/medicamento/listar'])
        this.alerta = new Alerta(this.ErrorTitulo,this.ErrorBuscar,true);
        this.alertaService.emiteError(this.alerta);      
        return throwError(e);
      })
    );
  }

  public crear(despacho: Despacho){
    console.log(despacho)
    return this.http.doPost<Despacho, boolean>(`${environment.endpoint}/despachos`, despacho, this.http.optsName('crear despacho')).pipe(
      catchError(e => {
        this.alerta = new Alerta(this.ErrorCrear,e.error.mensaje,true);
        this.alertaService.emiteError(this.alerta); 
        return throwError(e);
      })
    );
  }

  public actualizar(despacho: Despacho){
    return this.http.doPut<Despacho, boolean>(`${environment.endpoint}/despachos/${despacho.id}`, despacho, this.http.optsName('editar despacho'));
  }


}