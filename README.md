# _guanabana__component

Módulo de componentes funcionales. Creado para no replicar funcionalidades de componentes generales y exportarlos al generador de sistemas de diseño [guanabana](https://github.com/flkt/guanabana) en donde se define su diseño final, dependiendo del sistema de diseño que se esté creando.




## nota

NO tiene sass ni css ni naa, los estilos vendrán de [_guanabana__style](https://github.com/flkt/_guanabana__style).

NO tiene documentación porque se mostrará en el sistema de diseño [guanabana](https://github.com/flkt/guanabana).



## cómo utilizar este repo en otro proyecto

Instala el repositorio en tu proyecto
```zsh
npm i git@github.com:flkt/_guanabana__component.git
```

Importa la biblioteca en el `main.js` de tu proyecto
```js
import guanabanacomponent from 'guanabana-component'
```

Agregalo para usar en la aplicación en el `main.js` después de crear la App
```js
app.use(guanabanacomponent)
```

En cualquier vista, utiliza cualquiera de los componentes sin importarlos
```html
<button-test>
  hola!
</button-test>
```

## levantar el entorno local

Clona el repositorio en la terminal
```zsh
git clone git@github.com:flkt/_guanabana__component.git
```

Instala las dependencias
```zsh
npm install
```

Levanta el entorno local
```zsh
npm run dev
```

Abre cualquier navegador con la ruta `http://localhost:5173/`




## compilar biblioteca

Compila los componentes para su distribucion
```zsh
npm run build
```

Encuentra los archivos en la carpeta 
`/dist`

Para configurar las opciones del build, edita el archivo
`vite.config.js`

Lee la documentación en [Vite Configuracion for Libraries](https://vitejs.dev/guide/build.html#library-mode).


## estructura del proyecto

```text
index.html
├── dist/
    guanabana-component.js
    guanabana-component.umd.cjs
├── public/  <-  archivos publicos del entorno local
    favicon.ico
└── src/
    App.vue  <- para agregar los componentes y poder verlos en el entorno local
    main.js  <-  configuracion de la app para el entorno local
    index.js  <-  exporta cada componente de la biblioteca
    └── components/
        index.js  <- lista de todos los componentes a exportar
        ButtonTest.vue
        . . .
```
___

*Este proyecto fue construido con [node](https://nodejs.org/en/) 18.13.0, [vite](https://vitejs.dev/) 4.1.4 y [vue](https://vuejs.org/) 3.2.47*
