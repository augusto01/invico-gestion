 INVICO - Gestión de Expedientes (Modernización Angular)

Este proyecto forma parte de una iniciativa de **modernización tecnológica** para el Instituto de Vivienda de Corrientes (INVICO). El objetivo principal es demostrar la capacidad de realizar una **migración incremental de software crítico**

- Hoja de Ruta de Migración (Migration Path)

El proyecto inicia en **Angular v15** y se escalará progresivamente hasta la **v21**, documentando cada cambio arquitectónico clave:

| Fase | Versión | Hito Tecnológico | Estado |
| :--- | :--- | :--- | :--- |
| **01** | `v15.2.x` | Arquitectura base con NgModules y RxJS. | 🟢 Actual |
| **02** | `v16.x.x` | Introducción de **Angular Signals** (Reactividad nativa). | ⏳ Pendiente |
| **03** | `v17.x.x` | Nuevo **Control Flow** (`@if`, `@for`) y Standalone Components. | ⏳ Pendiente |
| **04** | `v18.x.x` | Implementación de **Zoneless Change Detection**. | ⏳ Pendiente |
| **05** | `v21.x.x` | Refactorización final y optimización de compilación. | ⏳ Pendiente |

- 🛠️ Tecnologías Utilizadas

* **Core:** Angular 15 (Node.js v18.16.0 LTS)
* **Lenguaje:** TypeScript (Strict Mode Activado)
* **Estado:** RxJS Observables
* **Estilos:** CSS3 Puro (Estructura modular)
* **API:** JSONPlaceholder (Mocking de expedientes reales)

- 📋 Características del Desarrollo

1.  **Tipado Estricto:** Uso de `Interfaces` para todos los modelos de datos (Expedientes, Usuarios).
2.  **Inyección de Dependencias:** Servicios desacoplados para la lógica de negocio y consumo de APIs.
3.  **Separación de Responsabilidades:** Arquitectura clara entre lógica (TS), vista (HTML) y diseño (CSS).

- 🔧 Instalación y Ejecución

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/invico-gestion.git](https://github.com/tu-usuario/invico-gestion.git)
    ```
2.  Asegurarse de usar la versión correcta de Node (v18):
    ```bash
    nvm use 18.16.0
    ```
3.  Instalar dependencias:
    ```bash
    npm install --legacy-peer-deps
    ```
4.  Lanzar el servidor de desarrollo:
    ```bash
    $env:NODE_OPTIONS = "--openssl-legacy-provider"
    npx ng serve
    ```

---
Desarrollado por **Augusto Almiron** - *Software Developer*
