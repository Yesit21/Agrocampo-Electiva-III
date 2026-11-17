import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  perfilMenuAbierto = false;

  constructor(private readonly router: Router) {}

  alternarMenuPerfil(): void {
    this.perfilMenuAbierto = !this.perfilMenuAbierto;
  }

  cerrarSesion(): void {
    this.perfilMenuAbierto = false;
    void this.router.navigateByUrl('/login');
  }
}