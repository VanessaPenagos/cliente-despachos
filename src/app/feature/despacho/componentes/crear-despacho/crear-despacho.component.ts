import { Component, OnInit} from '@angular/core';
import { Medicamento } from 'src/app/feature/medicamento/shared/model/medicamento';
import { Despacho } from '../../shared/model/despacho';
import { DespachoService } from '../../shared/service/despacho.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-despacho',
  templateUrl: './crear-despacho.component.html',
  styleUrls: ['./crear-despacho.component.css']
})
export class CrearDespachoComponent implements OnInit {

  public medicamento: Medicamento = new Medicamento;
  public despacho: Despacho = new Despacho();

  constructor(protected despachoService:  DespachoService, protected router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.medicamento.id = this.activatedRoute.snapshot.params.id;
    this.medicamento.nombre = this.activatedRoute.snapshot.params.nombre;
    this.medicamento.fecha = this.activatedRoute.snapshot.params.fechaVencimiento;
    this.medicamento.costo = this.activatedRoute.snapshot.params.costo;

    this.despacho.medicamento = this.medicamento;
  }

  public crear(): void{
    this.despachoService.crear(this.despacho).subscribe(
      _a => {
        this.router.navigate(['/medicamentos/listar']),
        swal.fire('medicamento creada', `El despacho con identificador ${_a['valor']} generado con éxito`, 'success')
        console.log(_a['valor'])
      }
      
    )
  }

}
