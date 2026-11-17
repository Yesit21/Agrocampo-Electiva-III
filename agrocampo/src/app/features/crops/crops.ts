import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Cultivo {
  id: number;
  nombre: string;
  tipo: string;
  ubicacion: string;
}

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crops.html',
  styleUrl: './crops.css'
})
export class Crops {
  mostrarFormulario = false;

  nuevoNombre = '';
  nuevoTipo = '';
  nuevaUbicacion = '';

  cultivos: Cultivo[] = [
    { id: 1, nombre: 'Cultivo principal', tipo: 'Café', ubicacion: 'Parcela 1' },
    { id: 2, nombre: 'Cultivo de papa', tipo: 'Papa', ubicacion: 'Parcela 2' },
    { id: 3, nombre: 'Cultivo de maíz', tipo: 'Maíz', ubicacion: 'Parcela 3' }
  ];

  agregarCultivo(): void {
    if (!this.nuevoNombre || !this.nuevoTipo || !this.nuevaUbicacion) {
      alert('Completa todos los campos.');
      return;
    }

    this.cultivos.push({
      id: Date.now(),
      nombre: this.nuevoNombre,
      tipo: this.nuevoTipo,
      ubicacion: this.nuevaUbicacion
    });

    this.nuevoNombre = '';
    this.nuevoTipo = '';
    this.nuevaUbicacion = '';
    this.mostrarFormulario = false;
  }

  eliminarCultivo(id: number): void {
    this.cultivos = this.cultivos.filter(cultivo => cultivo.id !== id);
  }
}