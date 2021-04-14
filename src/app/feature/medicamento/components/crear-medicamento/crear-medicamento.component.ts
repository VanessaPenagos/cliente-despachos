import { Component,OnInit} from '@angular/core';
import { MedicamentoService } from '../../shared/service/medicamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alerta } from '@shared/components/model/alerta';
import { AlertaService } from '@shared/components/service/alerta.service';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit{
  public mensajeExito = "medicamento creado";
  public alerta: Alerta;
  
  medicamentoForm: FormGroup;
  
  constructor(protected medicamentoServices: MedicamentoService, protected router: Router, private alertaService:AlertaService) { }

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
        this.alerta = new Alerta(this.mensajeExito,this.medicamentoForm.value.nombre,true);
        this.alertaService.emiteinfo(this.alerta);
      }
    )
  }

}
