
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plant-analysis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './plant-analysis.html',
  styleUrl: './plant-analysis.css'
})
export class PlantAnalysis {
  imagenSeleccionada = '';
  nombreImagen = '';
  tipoPlanta = '';
  mostrarResultado = false;

  seleccionarImagen(event: Event): void {
    const archivo = (event.target as HTMLInputElement).files?.[0];

    if (!archivo) return;

    if (!archivo.type.startsWith('image/')) {
      alert('Por favor, selecciona un archivo de imagen.');
      return;
    }

    this.imagenSeleccionada = URL.createObjectURL(archivo);
    this.nombreImagen = archivo.name;
    this.mostrarResultado = false;
  }

  analizarPlanta(): void {
    if (!this.imagenSeleccionada || !this.tipoPlanta) {
      alert('Selecciona una imagen y el tipo de cultivo.');
      return;
    }

    this.mostrarResultado = true;
  }
}
