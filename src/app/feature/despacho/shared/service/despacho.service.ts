import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Despacho } from '../model/despacho';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  constructor(protected http: HttpService,  protected router: Router) { }

  public buscar(id:number) {
    return this.http.doGet<Despacho>(`${environment.endpoint}/despachos/${id}`, this.http.optsName('consultar despacho')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        this.router.navigate(['/medicamento/listar'])
        swal.fire('Error al buscar el despacho', "Despacho no encontrado", 'error');        
        return throwError(e);
      })
    );
  }

  public crear(despacho: Despacho){
    console.log(despacho)
    return this.http.doPost<Despacho, boolean>(`${environment.endpoint}/despachos`, despacho, this.http.optsName('crear despacho')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al crear el despacho', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  public actualizar(despacho: Despacho){
    return this.http.doPut<Despacho, boolean>(`${environment.endpoint}/despachos/${despacho.id}`, despacho, this.http.optsName('editar despacho'));
  }


}