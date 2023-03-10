# _guanabana__component

Módulo de componentes funcionales. Creado para no replicar funcionalidades de componentes generales y exportarlos al generador de sistemas de diseño [Guanabana](https://github.com/flkt/guanabana) en donde se define su diseño final, dependiendo del sistema de diseño que se esté creando.

## nota

Este repositorio no contiene estilos propios, es complemento del repositorio `_guanabana__style` y esta pensado que el diseño final del componente  pero se puede utilizar cualquier librería para darle el formato base y afinar el diseño en el proyecto final.

## ambiente local
Clona el repositorio en la terminal
```ssh
git clone git@github.com:flkt/_guanabana__component.git
```

Instala las dependencias
```ssh
npm install
```

Levanta el entorno local
```ssh
npm run dev
```

Abre cualquier navegador con la ruta `http://localhost:5173/`


## compilar biblioteca

Compila con
```sh
npm run build
```

Encuentra los archivos en la carpeta 
`/dist`

Para configurar las opciones del build, edita el archivo
`vite.config.js`

Lee la documentación en [Vite Configuracion for Libraries](https://vitejs.dev/guide/build.html#library-mode).


___

*Este proyecto fue construido con [node](https://nodejs.org/en/) 18.13.0, [vite](https://vitejs.dev/) 4.1.4 y [vue](https://vuejs.org/) 3.2.47*
