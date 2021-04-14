import { Component,OnInit} from '@angular/core';
import { MedicamentoService } from '../../shared/service/medicamento.service';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit{
  
  medicamentoForm: FormGroup;
  constructor(protected medicamentoServices: MedicamentoService, protected router: Router) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  private construirFormularioProducto() {
    this.medicamentoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fechaVencimiento: new FormControl('', [Validators.required]),
      costo: new FormControl('', [Validators.required])
    });
  }

  public crear(): void{
    this.medicamentoServices.crear(this.medicamentoForm.value).subscribe(
      _crearMedicamento => {
        this.router.navigate(['/medicamento/listar']),
        swal.fire('medicamento creado', `Medicamento ${this.medicamentoForm.value.nombre} creado con éxito`, 'success')
      }
    )
  }

}
