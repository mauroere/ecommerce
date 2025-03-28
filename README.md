# Ecommerce Project

Este proyecto es una aplicación de comercio electrónico diseñada para gestionar productos, usuarios y pedidos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para instalar el proyecto:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ecommerce.git
   cd ecommerce
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las variables necesarias según el archivo `.env.example`.

## Ejecución

### Modo Desarrollo

Para iniciar el servidor en modo desarrollo, ejecuta:
```bash
npm run dev
# o si usas yarn
yarn dev
```

El servidor estará disponible en `http://localhost:3000`.

### Modo Producción

1. Genera la build del proyecto:
   ```bash
   npm run build
   # o si usas yarn
   yarn build
   ```

2. Inicia el servidor:
   ```bash
   npm start
   # o si usas yarn
   yarn start
   ```

## Estructura del Proyecto

La estructura actual del proyecto es la siguiente:

```
ecommerce/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Páginas principales de la aplicación
│   ├── services/         # Lógica para interactuar con APIs
│   ├── utils/            # Funciones utilitarias
│   └── styles/           # Archivos de estilos
├── public/               # Archivos estáticos
├── .env.example          # Ejemplo de configuración de variables de entorno
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto
```

## Scripts Disponibles

En el archivo `package.json`, se encuentran los siguientes scripts útiles:

- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run build`: Genera la build para producción.
- `npm start`: Inicia el servidor en modo producción.
- `npm test`: Ejecuta las pruebas (si están configuradas).

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).