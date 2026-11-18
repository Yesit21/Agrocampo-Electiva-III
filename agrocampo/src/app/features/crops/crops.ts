
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CropCard } from './crop-card/crop-card';

interface Cultivo {
  id: number;
  nombre: string;
  tipo: string;
  ubicacion: string;
}

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [FormsModule, CropCard],
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
    if (!this.nuevoNombre.trim() || !this.nuevoTipo || !this.nuevaUbicacion.trim()) {
      alert('Completa todos los campos.');
      return;
    }

    this.cultivos.push({
      id: Date.now(),
      nombre: this.nuevoNombre.trim(),
      tipo: this.nuevoTipo,
      ubicacion: this.nuevaUbicacion.trim()
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
