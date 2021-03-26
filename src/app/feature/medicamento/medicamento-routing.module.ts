import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentoComponent } from './components/medicamento/medicamento.component';
import { ListarMedicamentoComponent } from './components/listar-medicamento/listar-medicamento.component';
import { CrearMedicamentoComponent } from './components/crear-medicamento/crear-medicamento.component';



const routes: Routes = [
  {
    path: '', 
    component: MedicamentoComponent,
    children: [
      {
        path: '',
        component: MedicamentoComponent
      },
      {
        path: 'listar',
        component: ListarMedicamentoComponent
      },
      {
        path: 'crear',
        component: CrearMedicamentoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentoRoutingModule { }