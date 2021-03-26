import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Medicamento } from '../model/medicamento'; 

@Injectable()
export class MedicamentoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Medicamento[]>(`${environment.endpoint}/medicamentos`, this.http.optsName('consultar medicamentos'));
  }

  public crear(medicamento: Medicamento){
    console.log("ACÁ LLEGA EL MEDICAMENTO ASÍ: ")
    console.log(medicamento);
    return this.http.doPost<Medicamento, boolean>(`${environment.endpoint}/medicamentos`, medicamento, this.http.optsName('crear medicamentos'));
  }

}