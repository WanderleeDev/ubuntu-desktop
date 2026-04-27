# Ubuntu Desktop Clone

A high-fidelity clone of the Ubuntu Desktop environment built with modern web technologies.

## 🚀 Live Demo
[ubuntu-clone.wanderlee.site](https://ubuntu-clone.wanderlee.site/)

## 🛠️ Tech Stack
- **Framework**: Angular 18 (Standalone Components)
- **Styling**: Tailwind CSS v4 (Modern, utility-first)
- **State Management**: NgRx SignalStore (Reactive state)
- **Reactivity**: Angular Signals
- **Drag & Drop**: Angular CDK
- **Theme**: ngx-theme-stack (Light/Dark mode)
- **Icons**: Material Symbols & Custom SVGs

## 🏗️ Architecture
The project follows a modular structure inspired by Domain-Driven Design (DDD) principles:
- **`modules/`**: Feature-based modules (Auth, Desktop, Apps).
  - **`domain/`**: Interfaces and business logic.
  - **`infrastructure/`**: Stores, services, and repositories.
  - **`presentation/`**: UI components, layouts, and views.
- **`shared/`**: Common components, services, and utilities used across modules.
- **`public/assets/`**: Static assets including wallpapers and icons.

## 📂 Repository
[GitHub - WanderleeDev/ubuntu-desktop](https://github.com/WanderleeDev/ubuntu-desktop/tree/main/frontend)

---
Generated with ❤️ by [WanderleeDev](https://github.com/WanderleeDev)
