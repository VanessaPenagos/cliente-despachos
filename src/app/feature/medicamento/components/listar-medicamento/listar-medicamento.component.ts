import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentoService } from 'src/app/feature/medicamento/shared/service/medicamento.service';
import { Medicamento } from 'src/app/feature/medicamento/shared/model/medicamento';

@Component({
  selector: 'app-listar-medicamento',
  templateUrl: './listar-medicamento.component.html',
  styleUrls: ['./listar-medicamento.component.css']
})

export class ListarMedicamentoComponent implements OnInit {

  public listaMedicamentos: Observable<Medicamento[]>;

  constructor(protected medicamentoService:  MedicamentoService) { }

  ngOnInit(): void {
    this.listaMedicamentos = this.medicamentoService.consultar();
  }

}