import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Sesion {
  nombre: string;
  email: string;
  telefono: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  perfilMenuAbierto = false;
  nombreUsuario = 'Usuario';
  iniciales = 'U';
  rolUsuario = 'Usuario';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(): void {
    const sesionString = localStorage.getItem('agrocampo_sesion');
    
    if (sesionString) {
      const sesion: Sesion = JSON.parse(sesionString);
      this.nombreUsuario = sesion.nombre;
      this.iniciales = this.obtenerIniciales(sesion.nombre);
      this.rolUsuario = 'Usuario';
    }
  }

  obtenerIniciales(nombre: string): string {
    const palabras = nombre.trim().split(' ');
    
    if (palabras.length >= 2) {
      return (palabras[0][0] + palabras[1][0]).toUpperCase();
    }
    
    return nombre.substring(0, 2).toUpperCase();
  }

  alternarMenuPerfil(): void {
    this.perfilMenuAbierto = !this.perfilMenuAbierto;
  }

  cerrarSesion(): void {
    this.perfilMenuAbierto = false;
    localStorage.removeItem('agrocampo_sesion');
    void this.router.navigateByUrl('/login');
  }
}