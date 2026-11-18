import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Sesion {
  nombre: string;
  email: string;
  telefono: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  nombreCompleto = '';
  nombre = '';
  apellido = '';
  correo = '';
  telefono = '';
  iniciales = 'U';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(): void {
    const sesionString = localStorage.getItem('agrocampo_sesion');
    
    if (!sesionString) {
      // Si no hay sesión, redirigir al login
      this.router.navigate(['/login']);
      return;
    }

    const sesion: Sesion = JSON.parse(sesionString);
    
    this.nombreCompleto = sesion.nombre;
    this.correo = sesion.email;
    this.telefono = sesion.telefono;
    
    // Separar nombre y apellido
    const palabras = sesion.nombre.trim().split(' ');
    if (palabras.length >= 2) {
      this.nombre = palabras[0];
      this.apellido = palabras.slice(1).join(' ');
    } else {
      this.nombre = sesion.nombre;
      this.apellido = '';
    }

    // Calcular iniciales
    this.iniciales = this.obtenerIniciales(sesion.nombre);
  }

  obtenerIniciales(nombre: string): string {
    const palabras = nombre.trim().split(' ');
    
    if (palabras.length >= 2) {
      return (palabras[0][0] + palabras[1][0]).toUpperCase();
    }
    
    return nombre.substring(0, 2).toUpperCase();
  }

  guardarCambios(): void {
    // Validar campos
    if (!this.nombre.trim() || !this.correo.trim() || !this.telefono.trim()) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    // Construir el nombre completo
    const nombreCompleto = this.apellido 
      ? `${this.nombre} ${this.apellido}` 
      : this.nombre;

    // Actualizar la sesión
    const sesionActualizada: Sesion = {
      nombre: nombreCompleto,
      email: this.correo,
      telefono: this.telefono
    };

    localStorage.setItem('agrocampo_sesion', JSON.stringify(sesionActualizada));

    // También actualizar en la lista de usuarios
    const usuarios = JSON.parse(localStorage.getItem('agrocampo_usuarios') || '[]');
    const indice = usuarios.findIndex((u: any) => u.email === this.correo);
    
    if (indice !== -1) {
      usuarios[indice].nombre = nombreCompleto;
      usuarios[indice].telefono = this.telefono;
      localStorage.setItem('agrocampo_usuarios', JSON.stringify(usuarios));
    }

    alert('Cambios guardados exitosamente.');
    
    // Recargar los datos
    this.cargarDatosUsuario();
  }
}