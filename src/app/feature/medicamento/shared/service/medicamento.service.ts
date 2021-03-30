import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { Medicamento } from '../model/medicamento'; 

@Injectable()
export class MedicamentoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Medicamento[]>(`${environment.endpoint}/medicamentos`, this.http.optsName('consultar medicamentos')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al buscar los medicamentos', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  public crear(medicamento: Medicamento){
    return this.http.doPost<Medicamento, boolean>(`${environment.endpoint}/medicamentos`, medicamento, this.http.optsName('crear medicamentos')).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal.fire('Error al crear el medicamento', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}