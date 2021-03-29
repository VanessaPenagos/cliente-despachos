import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespachoComponent } from './componentes/despacho/despacho.component';
import { CrearDespachoComponent } from './componentes/crear-despacho/crear-despacho.component';
import { ActualizarDespachoComponent } from './componentes/actualizar-despacho/actualizar-despacho.component';

const routes: Routes = [
  {
    path: '', 
    component: DespachoComponent,
    children: [
      {
        path: '',
        component: DespachoComponent
      },
      {
        path: 'crear/:id/:nombre/:fechaVencimiento/:costo',
        component: CrearDespachoComponent
      },
      {
        path: 'crear',
        component: CrearDespachoComponent
      },
      {
        path: 'actualizar/:id',
        component: ActualizarDespachoComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespachoRoutingModule { }