import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoMascotaComponent } from './components/listado-mascota/listado-mascota.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  { path: '', redirectTo: 'listaMascotas', pathMatch: 'full' },
  { path: 'listaMascotas', component: ListadoMascotaComponent },
  { path: 'listaMascotas\?Ultimo\=true', component: ListadoMascotaComponent },
  { path: 'agregarMascotas', component: AgregarEditarMascotaComponent },
  { path: 'verMascota/:id', component: VerMascotaComponent },
  { path: 'editarMascota/:id', component: AgregarEditarMascotaComponent },
  { path: '**', redirectTo: 'listaMascotas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
