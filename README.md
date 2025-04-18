# AlgoRhythm

Aplicación móvil desarrollada con React Native y Expo.

## Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)
- Para desarrollo en dispositivos físicos: Expo Go app en iOS/Android

## Instalación

1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd AlgoRhythm
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
   - Copia `.env.dev.example` a `.env.dev` para desarrollo
   - Copia `.env.prod.example` a `.env.prod` para producción

## Comandos disponibles

### Desarrollo

```bash
# Iniciar en modo desarrollo
npm run dev

# Iniciar en iOS
npm run dev:ios

# Iniciar en Android
npm run dev:android

# Iniciar en Web
npm run dev:web
```

### Construcción

```bash
# Construir versión para dispositivos móviles
npm run dev:build:mobile

# Construir versión web
npm run dev:build:web
```

### Despliegue

```bash
# Desplegar versión web
npm run dev:deploy:web
```

## Estructura del proyecto

La aplicación utiliza Expo Router para la navegación y está estructurada siguiendo las mejores prácticas de React Native.

## Proyecto Expo

Este proyecto está vinculado a un proyecto Expo con ID: `67a96e99-e82d-4a14-ab26-08a46d09b5d6`.

Para inicializar el proyecto en una nueva máquina con Expo:

```bash
npx eas-cli init --id 67a96e99-e82d-4a14-ab26-08a46d09b5d6
```
