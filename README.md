# reto-tecnico-memo

## Clonar el repositorio
```
https://github.com/allenpython20/reto-tecnico-memo.git
```

## Instalar dependencias
```
npm install
```

### Iniciar el proyecto
```
npm run serve
```


# Explicación breve de la solución

1. Se creo el componente padre UserView.vue donde se usa los componentes requeridos en la prueba.

2. En el componente padre se hace la carga de los usuarios en el metodo onMounted y mediante props se envia la data al componente hijo UserTable que se encarga de renderizar los usuarios

3. Cada componente hijo emite eventos al padre para poder tener bien separada la logica de los componentes y que puedan ser reutilizables.

4. En el store defino mis variables users que será el array de usuarios que se trae de la api y nationalities es la que permitirá filtrar por nacionalidad en la query.

5. Se define el getter filteredUsers que será el que se usará para renderizar los usuarios en la tabla.

6. Falto terminar
    - Paginación si los usuarios son demasiados