  
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MedicamentoRoutingModule } from './medicamento-routing.module';
import { MedicamentoService } from './shared/service/medicamento.service';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { ListarMedicamentoComponent } from './components/listar-medicamento/listar-medicamento.component';
import { CrearMedicamentoComponent } from './components/crear-medicamento/crear-medicamento.component';

@NgModule({
    declarations: [
        MedicamentoComponent,
        ListarMedicamentoComponent,
        CrearMedicamentoComponent,
    ],
    imports: [
        MedicamentoRoutingModule,
      SharedModule
    ],
    providers: [MedicamentoService]
  })
  export class MedicamentoModule { }