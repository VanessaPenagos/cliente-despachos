import { Component, OnInit} from '@angular/core';
import { Medicamento } from 'src/app/feature/medicamento/shared/model/medicamento';
import { Despacho } from '../../shared/model/despacho';
import { DespachoService } from '../../shared/service/despacho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from '@shared/components/model/alerta';
import { AlertaService } from '@shared/components/service/alerta.service';

@Component({
  selector: 'app-crear-despacho',
  templateUrl: './crear-despacho.component.html',
  styleUrls: ['./crear-despacho.component.css']
})
export class CrearDespachoComponent implements OnInit {
  public mensajeExito = "¡Despacho generado con éxito!";
  public alerta: Alerta;
  public medicamento: Medicamento = new Medicamento;
  public despacho: Despacho = new Despacho();

  constructor(protected despachoService:  DespachoService, protected router: Router, private activatedRoute:ActivatedRoute, private alertaService:AlertaService) { }

  ngOnInit(): void {
    this.medicamento.id = this.activatedRoute.snapshot.params.id;
    this.medicamento.nombre = this.activatedRoute.snapshot.params.nombre;
    this.medicamento.fechaVencimiento = this.activatedRoute.snapshot.params.fechaVencimiento;
    this.medicamento.costo = this.activatedRoute.snapshot.params.costo;

    this.despacho.medicamento = this.medicamento;
  }

  public crear(): void{
    this.despachoService.crear(this.despacho).subscribe(
      _despacho => {
        this.router.navigate(['/medicamento']),
        this.alerta = new Alerta(this.mensajeExito,_despacho['valor'],true);
        this.alertaService.emiteinfo(this.alerta);
      }      
    )
  }
}
