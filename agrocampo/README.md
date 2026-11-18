# AgroCampo 🌱

AgroCampo es una aplicación web desarrollada con Angular que busca facilitar la gestión y el seguimiento de cultivos. Cuenta con diferentes secciones que permiten registrar usuarios, administrar cultivos, analizar plantas y consultar información relacionada con enfermedades y diagnósticos.

El proyecto está organizado en varios módulos para que la navegación sea sencilla y los usuarios puedan acceder fácilmente a las diferentes funcionalidades.

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Angular Router
- FormsModule
- Angular Signals
- Local Storage
- Vitest para pruebas unitarias

## Requisitos

Para ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm
- Angular CLI 

## Instalación y ejecución

Primero, clona el repositorio:

```bash
git clone https://github.com/Yesit21/Agrocampo-Electiva-III.git
```

Ingresa a la carpeta del proyecto:

```bash
cd agrocampo
```

Instala las dependencias:

```bash
npm install
```

Inicia la aplicación:

```bash
ng serve -o
```

Después de iniciar, abre el navegador en:

http://localhost:4200/

La primera pantalla que aparece es la de registro.

## Funcionalidades

### Registro e inicio de sesión

La aplicación cuenta con dos pantallas para el acceso de los usuarios:

- **Registro:** permite crear una cuenta ingresando nombre, correo electrónico, teléfono y contraseña.
- **Inicio de sesión:** permite ingresar con el correo y la contraseña registrados.

Los formularios cuentan con validaciones para evitar campos vacíos, correos incorrectos y contraseñas que no cumplan con los requisitos establecidos.

### Dashboard

Es la pantalla principal de AgroCampo. Allí se muestran estadísticas generales, plantas analizadas, enfermedades detectadas, actividad reciente y algunas alertas relacionadas con los cultivos.

### Gestión de cultivos

Permite consultar los cultivos registrados, agregar nuevos y eliminarlos. Para cada cultivo se puede indicar su nombre, tipo de planta y ubicación.

### Análisis de plantas

Sección destinada al análisis de plantas y a la consulta de información sobre su estado.

### Historial

Permite consultar los registros de diagnósticos realizados en la aplicación.

### Biblioteca de enfermedades

Contiene información relacionada con diferentes enfermedades que pueden afectar los cultivos.

### Alertas

Muestra avisos y recordatorios para tener en cuenta durante el cuidado de los cultivos.

### Perfil

Permite acceder a la información y opciones relacionadas con el perfil del usuario.

## Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/registro` | Registro de usuarios |
| `/login` | Inicio de sesión |
| `/dashboard` | Panel principal |
| `/cultivos` | Gestión de cultivos |
| `/analizar` | Análisis de plantas |
| `/historial` | Historial de diagnósticos |
| `/biblioteca` | Biblioteca de enfermedades |
| `/alertas` | Alertas y recordatorios |
| `/perfil` | Perfil del usuario |

## Conceptos de Angular utilizados

Durante el desarrollo de AgroCampo se aplicaron diferentes conceptos de Angular:

- **Componentes standalone:** para organizar las diferentes secciones de la aplicación.
- **Angular Router:** para navegar entre las páginas.
- **Lazy Loading:** para cargar los componentes cuando se necesitan.
- **FormsModule:** para trabajar con los formularios.
- **Data Binding:** para relacionar los datos del formulario con el componente.
- **Eventos:** para ejecutar acciones como registrar o eliminar cultivos.
- **Control de flujo:** mediante `@if`, `@for` y `@empty`.
- **Signals y Computed:** para manejar valores que cambian y calcular información del Dashboard.
- **Input y Output:** para comunicar componentes padre e hijo, como ocurre en la gestión de cultivos.

## Estructura del proyecto

```text
src/
├── app/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/
│   │   ├── crops/
│   │   │   └── crop-card/
│   │   ├── plant-analysis/
│   │   ├── diagnostics-history/
│   │   ├── disease-library/
│   │   ├── alerts/
│   │   └── profile/
│   │
│   ├── layout/
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── main-layout/
│   │
│   └── app.routes.ts
│
├── styles.css
└── index.html

public/
└── images/
```

## Almacenamiento de datos

Para el registro y el inicio de sesión se utiliza Local Storage, donde se guardan los usuarios registrados y la información básica de la sesión activa.

Los datos se almacenan utilizando las siguientes claves:

- `agrocampo_usuarios`: contiene los usuarios registrados.
- `agrocampo_sesion`: contiene la información del usuario que inició sesión.

La gestión de cultivos funciona durante la ejecución de la aplicación, pero sus cambios no se guardan permanentemente.

Este almacenamiento se utiliza con fines académicos y de demostración. No reemplaza un sistema de autenticación con servidor.

## Sobre el proyecto

AgroCampo se desarrolla como parte de un proyecto académico, con el propósito de aplicar los conocimientos adquiridos en desarrollo web utilizando Angular y TypeScript. Durante su construcción se trabajan componentes, formularios, navegación, manejo de datos y organización del código.