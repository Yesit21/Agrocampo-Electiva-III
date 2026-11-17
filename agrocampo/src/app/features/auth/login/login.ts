
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';
  mostrarPassword = false;

  constructor(private router: Router) {}

  iniciarSesion(): void {

    // Validar campos vacíos
    if (!this.email.trim() || !this.password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar correo
    if (!this.email.includes('@')) {
      alert('Ingresa un correo electrónico válido.');
      return;
    }

    // Validar contraseña
    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Acceder al Dashboard
    alert('Inicio de sesión de demostración exitoso.');

    this.router.navigate(['/dashboard']);
  }
}
