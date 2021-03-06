import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/medicamento/listar', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'medicamento', loadChildren: () => import('src/app/feature/medicamento/medicamento.module').then(mod => mod.MedicamentoModule) },
  { path: 'despacho', loadChildren: () => import('src/app/feature/despacho/despacho.module').then(mod => mod.DespachoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
