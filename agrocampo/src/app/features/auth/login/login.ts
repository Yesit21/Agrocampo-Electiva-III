
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Estructura de los usuarios registrados
interface Usuario {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
}

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

  constructor(private readonly router: Router) {}

  iniciarSesion(): void {

    // Obtener los datos del formulario
    const email = this.email.trim().toLowerCase();
    const password = this.password;

    // Validar campos vacíos
    if (!email || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar formato del correo
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
      alert('Ingresa un correo electrónico válido.');
      return;
    }

    // Validar longitud de contraseña
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Consultar usuarios almacenados
    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem('agrocampo_usuarios') || '[]'
    );

    // Buscar coincidencia de correo y contraseña
    const usuarioEncontrado = usuarios.find(
      usuario =>
        usuario.email === email &&
        usuario.password === password
    );

    // Comprobar si existe el usuario
    if (!usuarioEncontrado) {
      alert('Correo electrónico o contraseña incorrectos.');
      return;
    }

    // Guardar la sesión sin almacenar la contraseña
    const sesion = {
      nombre: usuarioEncontrado.nombre,
      email: usuarioEncontrado.email,
      telefono: usuarioEncontrado.telefono
    };

    localStorage.setItem(
      'agrocampo_sesion',
      JSON.stringify(sesion)
    );

    alert('¡Bienvenido a AgroCampo!');

    // Acceder al Dashboard
    this.router.navigate(['/dashboard']);
  }
}
