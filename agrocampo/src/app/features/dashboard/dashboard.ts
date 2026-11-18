
import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  // Signals: almacenan información reactiva
  cultivosRegistrados = signal(12);

  plantasAnalizadas = signal(85);

  enfermedadesDetectadas = signal(12);

  // Computed: calcula información a partir de otros Signals
  estadoCultivos = computed(() => {
    if (this.enfermedadesDetectadas() > 10) {
      return 'Requiere atención';
    }

    if (this.enfermedadesDetectadas() > 0) {
      return 'En seguimiento';
    }

    return 'Saludable';
  });

}
