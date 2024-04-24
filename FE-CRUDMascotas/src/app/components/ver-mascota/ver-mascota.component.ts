import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit/*, OnDestroy*/ {
  id!: number;
  mascota!: Mascota;
  loading: boolean = false;

  // siempre que se tiene una suscripción, ha excepción de las peticiones,
  // se debe iniciar la suscripcion y destruirla
  // routeSub!: Subscription;

  constructor(private _mascotaService: MascotaService,
    private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    // this.routeSub = this.aRoute.params.subscribe(data => {
    //   this.id = data['id'];
    //   this.obtenerMascota();
    // })
    this.obtenerMascota();
  }

  obtenerMascota(){
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data => {
      this.loading = false;
      this.mascota = data;
    })
  }

  // ngOnDestroy(): void {
  //   this.routeSub.unsubscribe();
  // }

}
