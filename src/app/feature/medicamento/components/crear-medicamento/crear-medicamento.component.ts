import { Component } from '@angular/core';
import { MedicamentoService } from '../../shared/service/medicamento.service';
import { Medicamento } from '../../shared/model/medicamento';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent{
  

  public medicamento: Medicamento = new Medicamento();

  constructor(protected medicamentoServices: MedicamentoService, protected router: Router) { }

  public crear(): void{
    this.medicamentoServices.crear(this.medicamento).subscribe(
      _a => {
        this.router.navigate(['/medicamento/listar']),
        swal.fire('medicamento creado', `Medicamento ${this.medicamento.nombre} creado con éxito`, 'success')
      }
    )
  }

}
