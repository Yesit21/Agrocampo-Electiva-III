
import { Component, input, output } from '@angular/core';

interface Cultivo {
  id: number;
  nombre: string;
  tipo: string;
  ubicacion: string;
}

@Component({
  selector: 'app-crop-card',
  standalone: true,
  imports: [],
  templateUrl: './crop-card.html',
  styleUrl: './crop-card.css'
})
export class CropCard {

  // Recibe la información del cultivo desde el padre
  cultivo = input.required<Cultivo>();

  // Emite un evento cuando se solicita eliminar
  eliminar = output<number>();

  eliminarCultivo(): void {
    this.eliminar.emit(this.cultivo().id);
  }
}
