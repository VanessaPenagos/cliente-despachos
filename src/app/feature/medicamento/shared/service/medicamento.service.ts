import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Medicamento } from '../model/medicamento'; 
import { Alerta } from '@shared/components/model/alerta';
import { AlertaService } from '@shared/components/service/alerta.service';

@Injectable()
export class MedicamentoService {
  public ErrorNoMedicamentos = "Error al buscar los medicamentos";
  public ErrorNoCrear = "Error al crear el medicamento";
  public alerta: Alerta;

  constructor(protected http: HttpService, private alertaService:AlertaService) {}

  public consultar() {
    return this.http.doGet<Medicamento[]>(`${environment.endpoint}/medicamentos`, this.http.optsName('consultar medicamentos')).pipe(
      catchError(e => {
        this.alerta = new Alerta(this.ErrorNoMedicamentos,e.error.mensaje,true);
        this.alertaService.emiteError(this.alerta);
        return throwError(e);
      })
    );
  }

  public crear(medicamento: Medicamento){
    return this.http.doPost<Medicamento, boolean>(`${environment.endpoint}/medicamentos`, medicamento, this.http.optsName('crear medicamentos')).pipe(
      catchError(e => {
        this.alerta = new Alerta(this.ErrorNoCrear,e.error.mensaje,true);
        this.alertaService.emiteError(this.alerta);
        return throwError(e);
      })
    );
  }

}