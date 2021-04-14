import { Component, OnInit } from '@angular/core';
import { Despacho } from 'src/app/feature/despacho/shared/model/despacho';
import { DespachoService } from 'src/app/feature/despacho/shared/service/despacho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerta } from '@shared/components/model/alerta';
import { AlertaService } from '@shared/components/service/alerta.service';

@Component({
  selector: 'app-actualizar-despacho',
  templateUrl: './actualizar-despacho.component.html',
  styleUrls: ['./actualizar-despacho.component.css']
})
export class ActualizarDespachoComponent implements OnInit {

  public mensajeExito = "¡Despacho actualizado con éxito!";
  public alerta: Alerta;
  public despacho: Despacho = new Despacho();


  constructor(protected despachoService:  DespachoService, protected router: Router, private activatedRoute:ActivatedRoute, private alertaService:AlertaService) { }

  ngOnInit(): void {
    this.cargarDespacho();    
  }


  cargarDespacho() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.despachoService.buscar(id).subscribe(
            despachoResponse => {           
              this.despacho = despachoResponse
            })
        }
      }
    )
  }

  public actualizar(): void{
    this.despachoService.actualizar(this.despacho).subscribe(
      _despacho => {
        this.router.navigate(['/medicamento']),
        this.alerta = new Alerta(this.mensajeExito,this.despacho.id,true);
        this.alertaService.emiteinfo(this.alerta);
      }
    )
  }
}
