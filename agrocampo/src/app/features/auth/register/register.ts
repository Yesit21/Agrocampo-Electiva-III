
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  nombre = '';
  email = '';
  telefono = '';
  password = '';
  confirmarPassword = '';

  constructor(private readonly router: Router) {}

  registrarUsuario(): void {
    const nombre = this.nombre.trim();
    const email = this.email.trim().toLowerCase();
    const telefono = this.telefono.trim();

    if (!nombre || !email || !telefono ||
        !this.password || !this.confirmarPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
      alert('Ingresa un correo electrónico válido.');
      return;
    }

    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Registro de demostración: todavía no guarda usuarios
    alert('Validación completada. Ahora puedes continuar al inicio de sesión.');

    this.router.navigate(['/login']);
  }
}
