  
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DespachoRoutingModule } from './despacho-routing.module';
import { DespachoService } from './shared/service/despacho.service';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { BuscarDespachoComponent } from './componentes/buscar-despacho/buscar-despacho.component';
import { CrearDespachoComponent } from './componentes/crear-despacho/crear-despacho.component';
import { ActualizarDespachoComponent } from './componentes/actualizar-despacho/actualizar-despacho.component';

@NgModule({
    declarations: [
        BuscarDespachoComponent,
        CrearDespachoComponent,
        ActualizarDespachoComponent,
        DespachoComponent
    ],
    imports: [
        DespachoRoutingModule,
      SharedModule
    ],
    providers: [DespachoService]
  })
  export class DespachoModule { }