# 📱 La Tienda de Fabri

**La Tienda de Fabri** es una aplicación móvil de e-commerce especializada en productos electrónicos, desarrollada como proyecto final para la aprobación del curso de Desarrollo de Aplicaciones de **CoderHouse**.

## 🎯 Funcionalidades

- Catálogo completo de productos electrónicos
- Navegación por categorías (smartphones, laptops, accesorios, etc.)
- Carrito de compras interactivo
- Sistema de autenticación con Firebase
- Perfil de usuario con foto y ubicación
- Integración con mapas para mostrar ubicación

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **React Native** | Framework principal |
| **Expo** | Plataforma de desarrollo |
| **Redux Toolkit** | Gestión de estado |
| **RTK Query** | Manejo de APIs |
| **Firebase Auth** | Autenticación |
| **React Navigation** | Navegación |
| **React Native Maps** | Integración de mapas |
| **OpenStreetMap** | Geocodificación |

## 🏗️ Arquitectura

La aplicación sigue una arquitectura modular con separación clara de responsabilidades:

- **Componentes reutilizables:** UI consistente
- **Servicios API:** Comunicación con backend
- **Estado global:** Redux para datos compartidos
- **Navegación stack/tab:** UX intuitiva

## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
npm install -g expo-cli
```

### Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/fabriguaglia/fabri-coder-final.git
cd la-tienda-de-fabri
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tus credenciales de Firebase y otras configuraciones necesarias

### Ejecución

Para ejecutar la aplicación en modo desarrollo:

```bash
expo start
```

Esto abrirá Expo DevTools en tu navegador. Desde ahí puedes:

- **Escanear el código QR** con la app Expo Go en tu dispositivo móvil
- **Presionar 'i'** para abrir en el simulador de iOS
- **Presionar 'a'** para abrir en el emulador de Android
- **Presionar 'w'** para abrir en el navegador web

### Dispositivos de prueba

#### Android
1. Instala [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) desde Google Play Store
2. Escanea el código QR con la aplicación

#### iOS
1. Instala [Expo Go](https://apps.apple.com/app/expo-go/id982107779) desde App Store
2. Escanea el código QR con la aplicación o la cámara del iPhone

### Build para producción

Para crear una build de producción:

```bash
expo build:android
# o
expo build:ios
```

## 👨‍💻 Desarrollador

Proyecto desarrollado por **Fabrizio Donato Guaglianone** como trabajo final para el curso de Desarrollo de Aplicaciones de **CoderHouse**.

## 📅 Duración de cursada

26 de Mayo del 2025 al 28 de Junio del 2025.

---

Este proyecto demuestra las competencias adquiridas en desarrollo móvil con React Native y las mejores prácticas de la industria.
