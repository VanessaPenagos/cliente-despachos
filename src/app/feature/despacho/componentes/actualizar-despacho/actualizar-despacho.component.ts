import { Component, OnInit } from '@angular/core';
import { Despacho } from 'src/app/feature/despacho/shared/model/despacho';
import { DespachoService } from 'src/app/feature/despacho/shared/service/despacho.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-despacho',
  templateUrl: './actualizar-despacho.component.html',
  styleUrls: ['./actualizar-despacho.component.css']
})
export class ActualizarDespachoComponent implements OnInit {

  public despacho: Despacho = new Despacho();

  constructor(protected despachoService:  DespachoService, protected router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDespacho();
  }

  cargarDespacho() {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id']
        if(id){
          this.despachoService.buscar(id).subscribe(
            despachoResponse => this.despacho = despachoResponse
          )
        }
      }
    )
  }

  public actualizar(): void{
    this.despachoService.actualizar(this.despacho).subscribe(
      _a => {
        this.router.navigate(['/medicamento']),
        swal.fire('medicamento actualizado', `El despacho con identificador ${this.despacho.id} actualizado con exito`, 'success')
      }
      
    )
  }

}
