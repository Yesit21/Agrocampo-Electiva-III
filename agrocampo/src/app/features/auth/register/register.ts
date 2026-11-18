
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

    // Limpiar y normalizar los datos
    const nombre = this.nombre.trim();
    const email = this.email.trim().toLowerCase();
    const telefono = this.telefono.trim();

    // Validar campos vacíos
    if (!nombre || !email || !telefono ||
        !this.password || !this.confirmarPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar nombre
    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    // Validar correo electrónico
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
      alert('Ingresa un correo electrónico válido.');
      return;
    }

    // Validar contraseña
    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Confirmar contraseña
    if (this.password !== this.confirmarPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Obtener usuarios guardados
    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem('agrocampo_usuarios') || '[]'
    );

    // Comprobar si el correo ya está registrado
    const usuarioExiste = usuarios.some(
      usuario => usuario.email === email
    );

    if (usuarioExiste) {
      alert('Este correo electrónico ya está registrado.');
      return;
    }

    // Crear el nuevo usuario
    const nuevoUsuario: Usuario = {
      nombre,
      email,
      telefono,
      password: this.password
    };

    // Agregar el usuario a la lista
    usuarios.push(nuevoUsuario);

    // Guardar los usuarios en Local Storage
    localStorage.setItem(
      'agrocampo_usuarios',
      JSON.stringify(usuarios)
    );

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Redirigir al Login
    this.router.navigate(['/login']);
  }
}
