import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';

const ELEMENT_DATA: Mascota[] = [
  { nombre: 'Onza', edad: 15, raza: 'Labrador', color: 'Dorado', peso: 25 },
  { nombre: 'Mike', edad: 5, raza: 'Golder', color: 'Dorado', peso: 44 },
  { nombre: 'Milton', edad: 6, raza: 'Golden', color: 'Dorado', peso: 37 },
  { nombre: 'Bartolo', edad: 3, raza: 'Dogo Argentino', color: 'Blanco', peso: 60 },
  { nombre: 'Aquiles', edad: 5, raza: 'Ovejero Aleman', color: 'Negro', peso: 67 },
  { nombre: 'Homero', edad: 1, raza: 'Labrador', color: 'Negro', peso: 44 },
  { nombre: 'Mark', edad: 1, raza: 'Callejero', color: 'Negro', peso: 25 }
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
