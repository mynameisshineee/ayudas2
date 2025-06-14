# BIA - Agente inteligente de ayudas públicas

Landing page para BIA, el agente de IA especializado en encontrar ayudas y subvenciones para empresas.

## Stack Tecnológico

- **Angular 19** con standalone components
- **Angular Universal (SSR)** para renderizado del lado del servidor
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Headless CMS** (Strapi/Storyblok) para gestión de contenido del blog

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd bia-landing

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:ssr` - Construye la aplicación con SSR
- `npm run serve:ssr` - Sirve la aplicación con SSR
- `npm test` - Ejecuta las pruebas unitarias
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/           # Página principal
│   │   ├── blog/           # Lista de artículos del blog
│   │   └── blog-post/      # Artículo individual del blog
│   ├── app.component.ts    # Componente raíz
│   ├── app.config.ts       # Configuración de la aplicación
│   ├── app.routes.ts       # Configuración de rutas
│   └── ...
├── styles.css              # Estilos globales con Tailwind
└── index.html              # Plantilla HTML principal
```

## Características

- **Responsive Design** - Optimizado para todos los dispositivos
- **SEO Optimizado** - Meta tags, Open Graph, JSON-LD
- **Performance** - Lazy loading, code splitting, optimización de imágenes
- **Accesibilidad** - WCAG AA compliance
- **SSR** - Renderizado del lado del servidor para mejor SEO

## Despliegue

### Producción con SSR

```bash
npm run build:ssr
npm run serve:ssr
```

### Despliegue estático

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/bia-landing`.

## Configuración del CMS

El proyecto está preparado para integrar un headless CMS (Strapi o Storyblok) para la gestión del blog. 

### Campos requeridos para el CMS:

- `title` - Título del artículo
- `slug` - URL amigable
- `excerpt` - Resumen del artículo
- `content` - Contenido completo (MDX)
- `coverImage` - Imagen de portada
- `author` - Autor del artículo
- `tags` - Etiquetas
- `publishedAt` - Fecha de publicación

## Paleta de Colores

- **Verde principal**: #009447
- **Blanco**: #ffffff
- **Gris oscuro**: #0a0d13

## Tipografía

- **Fuente principal**: Inter (Google Fonts)
- Pesos: 400, 500, 600, 700

## Contacto

- Email: hola@ayudas.ai
- Teléfono: 639 88 13 35
- Ubicación: Bilbao, España