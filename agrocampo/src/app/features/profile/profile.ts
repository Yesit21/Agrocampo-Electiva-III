import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  nombre = 'Juan Sebastián';
  apellido = 'Estacio Enriquez';
  correo = 'usuario@agrocampo.com';
  telefono = '3000000000';

  guardarCambios(): void {
    alert('Los cambios se han actualizado en esta demostración.');
  }
}