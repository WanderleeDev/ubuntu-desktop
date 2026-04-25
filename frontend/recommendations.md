# Hoja de Ruta: Mejoras Ubuntu Desktop (Premium)

Este documento detalla las funcionalidades pendientes para lograr una experiencia de escritorio Ubuntu 100% inmersiva y profesional.

## 1. Sidebar (Launcher)
- [ ] **Interactividad de Apertura**: Añadir handlers de click en los iconos para abrir/enfocar apps mediante el `WindowManagerStore`.
- [ ] **Indicadores de Estado**: Mostrar un punto blanco/naranja al lado del icono de cada aplicación que tenga al menos una instancia abierta.
- [ ] **Tooltips**: Mostrar el nombre de la aplicación al pasar el ratón (Hover).

## 2. Gestión de Ventanas (Window Framework)
- [ ] **Marco de Ventana (WindowFrame)**: Crear un componente contenedor para las aplicaciones que incluya:
    - Barra de título con estilo Ubuntu (oscuro/glassmorphism).
    - Botones de control: Cerrar (X naranja), Minimizar y Maximizar.
    - Soporte para arrastre (`cdkDrag`) por la barra de título.
- [ ] **Animaciones**: Implementar transiciones suaves (scale/fade) al abrir y cerrar ventanas.

## 3. Barra Superior (Top Bar)
- [ ] **Menú de Sistema (Quick Settings)**: Implementar un panel desplegable al hacer clic en los iconos de Red/Volumen/Energía que incluya:
    - Control de volumen (slider).
    - Botones de acción rápida (Wi-Fi, Bluetooth, Dark Mode).
    - Opciones de sesión (Cerrar sesión, Apagar, Reiniciar).

## 4. Cajón de Aplicaciones (App Drawer)
- [ ] **Dashboard de Aplicaciones**: Implementar la funcionalidad del botón de "9 puntos" para mostrar una rejilla de todas las aplicaciones instaladas con un buscador funcional.

## 5. Menú Contextual y Pulido
- [ ] **Desktop Context Menu**: Clic derecho en el fondo de escritorio para cambiar fondos o configuración rápida.
- [ ] **Sincronización de Reloj**: Asegurar que el calendario del top bar esté totalmente integrado con el estado global de la fecha.

---
*Este documento sirve como guía de implementación para las próximas fases del proyecto.*
