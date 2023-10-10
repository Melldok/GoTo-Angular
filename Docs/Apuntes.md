# Apuntes generales Angular.


**Por qué utilizar AngularJS?**

Angular se utiliza sobre todo en empresas, ya que es un framework que permite crear aplicaciones web de una forma rápida y sencilla. Además, es un framework que está en constante evolución y mejora, por lo que es muy recomendable para proyectos de gran envergadura, sobre todo, porque fuerza a los desarrolladores a seguir una serie de buenas prácticas que facilitan el mantenimiento y la escalabilidad de las aplicaciones. Angular se actualiza cada 6 meses, por lo que siempre está a la última en cuanto a tecnologías y funcionalidades.

Una de las peculiaridades de Angular es que utiliza la caracteristica de los decoradores, que son funciones que modifican clases de typescript.
Angular permite la inyeccion de dependencias, que es una tecnica de programacion que consiste en suministrar a una clase las dependencias que necesita para funcionar. Esto permite que el codigo sea mas mantenible y testeable, ya que las dependencias se pueden cambiar facilmente. Es menos complejo que los componentes se comuniquen entre si, ya que se hace a traves de las dependencias.

Una ventaja es que depende mucho menos de librerías de terceros, ya que la mayoría de las funcionalidades que se necesitan están incluidas en el framework. Esto hace que sea más fácil de mantener y actualizar. Angular es un framework que está pensado para crear aplicaciones web de una sola página (SPA), por lo que es muy recomendable para este tipo de aplicaciones. 


**Módulos**

Los módulos son contenedores de código que se encargan de agrupar componentes, servicios, directivas, etc. Los módulos se pueden anidar, es decir, un módulo puede contener a otros módulos. Los módulos se declaran con la función angular.module(). Pueden traer componentes ya hechos, como por ejemplo, el módulo ngRoute, que es el módulo que se utiliza para crear rutas en AngularJS. Los módulos se pueden declarar en diferentes archivos, pero siempre se debe declarar un módulo principal, que es el que se va a utilizar en la aplicación.

**Componentes**

Los componentes son la parte más importante de AngularJS. Los componentes son clases de typescript que se encargan de controlar una vista. Los componentes se declaran con la función angular.component(). Los componentes se pueden declarar en diferentes archivos, pero siempre se debedeclarar un componente principal, que es el que se va a utilizar en la aplicación. Los componentes se pueden anidar, es decir, un componente puede contener a otros componentes. Los componentes se pueden comunicar entre sí a través de las dependencias.

**Directivas**

Las directivas son atributos que se utilizan en las vistas para añadir funcionalidades a los elementos HTML. Las directivas se declaran con la función angular.directive(). Las directivas se pueden declarar en diferentes archivos, pero siempre se debe declarar una directiva principal, que es la que se va a utilizar en la aplicación. Las directivas se pueden anidar, es decir, una directiva puede contener a otras directivas. Las directivas se pueden comunicar entre sí a través de las dependencias.

**Servicios**

Los servicios son clases de typescript que se encargan de realizar tareas específicas. Los servicios se declaran con la función angular.service(). Los servicios se pueden declarar en diferentes archivos, pero siempre se debe declarar un servicio principal, que es el que se va a utilizar en la aplicación. Los servicios se pueden anidar, es decir, un servicio puede contener a otros servicios. Los servicios se pueden comunicar entre sí a través de las dependencias.

**Inyección de dependencias**

La inyección de dependencias es una técnica de programación que consiste en suministrar a una clase las dependencias que necesita para funcionar. Esto permite que el código sea más mantenible y testeable, ya que las dependencias se pueden cambiar fácilmente. Es menos complejo que los componentes se comuniquen entre sí, ya que se hace a través de las dependencias.

**Rutas**

Las rutas son las direcciones que se utilizan para acceder a las diferentes vistas de la aplicación. Las rutas se declaran con la función angular.route(). Las rutas se pueden declarar en diferentes archivos, pero siempre se debe declarar una ruta principal, que es la que se va a utilizar en la aplicación. Las rutas se pueden anidar, es decir, una ruta puede contener a otras rutas. Las rutas se pueden comunicar entre sí a través de las dependencias.

**Vistas**

Las vistas son los archivos HTML que se utilizan para mostrar la información de la aplicación. Las vistas se pueden declarar en diferentes archivos, pero siempre se debe declarar una vista principal, que es la que se va a utilizar en la aplicación. Las vistas se pueden anidar, es decir, una vista puede contener a otras vistas. Las vistas se pueden comunicar entre sí a través de las dependencias.

**Enrutamiento**

El enrutamiento es la técnica que se utiliza para navegar entre las diferentes vistas de la aplicación. El enrutamiento se declara con la función angular.route(). El enrutamiento se puede declarar en diferentes archivos, pero siempre se debe declarar un enrutamiento principal, que es el que se va a utilizar en la aplicación. El enrutamiento se puede anidar, es decir, un enrutamiento puede contener a otros enrutamientos. El enrutamiento se puede comunicar entre sí a través de las dependencias.











## Directivas: 

### Directiva ngFor* :

```html

    <p>Listado de Héroes</p>
    <ul>
    
        <li *ngFor="let heroe of heroes">{{heroe}}</li>

    </ul>

```


### Directiva ngif y else:


```html

    <div *ngIf="heroeBorrado" >
        <h3>Héroe Borrado : <span>{{heroeBorrado}}</span></h3> 
    </div>



    <div *ngIf="heroeBorrado; else noBorrado" >
    <h3>Héroe Borrado : <span>{{heroeBorrado}}</span></h3> 
    </div>

    <ng-template #noBorrado>
        <h3>No ha borrado nada</h3> 
    </ng-template>

```


## Módulos: 

Nos ayudan a agrupar componentes y piezas de la aplicación que tienen sentido entre sí. Cumplen varios objetivos. Como encapsular las cosas y ayudar con el lazyload. Cada persona puede encargarse de elementos diferentes de la aplicación, que se construirá de manera empaquetada y cómoda. 


```ts

    // Este modulo lo importaremos en su totalidad en un nivel mas alto de la aplicación, como app.module.

    @NgModule({
    // Aqui definimos qué contiene este módulo. Pipes, componentes, etc.
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    // Aquí definimos qué cosas quiero hacer visibles o públicas fuera de este módulo
    exports: [
        ListadoComponent,
    ],
    // Aquí dentro van módulos 
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}

```



## Formularios

Con el módulo FormsModule podemos usar directamente funciones como preventDefault de manera automatizada

```html
<form (ngSubmit)="agregar()">
    
    <input type="text" placeholder="Nombre">

    <input type="number" placeholder="Poder"> 

    <button type="submit">
        Agregar
    </button>

</form>

```

Two way data binding. El input recibe y envia el valor 

```html

    <input 
        type="text" 
        placeholder="Nombre"
        name="nombre"
        [(ngModel)]="nuevo.nombre"
    >

```

## Envio de data entre componentes :

### De padre a hijo :

Se utiliza el input.  Se envia mediante corchetes. Se puede utilizar con un alias.

```ts

    <app-agregar [nuevo]="nuevo"></app-agregar>

        @Input() nuevo: Personaje = {
        nombre: '',
        poder: 0    
  }

```

### De hijo a padre:

Se utiliza el output. 

```ts

    // En el componente

    @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    agregar(){

    if(this.nuevo.nombre.trim().length === 0){return}

    console.log(this.nuevo)

    //Emite un nuevo item de tipo personaje (Definido en el Emitter)
    this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo = {nombre: '', poder: 0}

    // Recibiendo en el template ()

        <app-agregar 
        [nuevo]="nuevo"
        (onNuevoPersonaje)="agregarNuevoPersonaje($event)"
        ></app-agregar>

    // Consumiendo en componente padre

        nuevo: Personaje = {
        nombre: '',
        poder: 0   
    }

        agregarNuevoPersonaje(argumento:Personaje){
            this.personajes.push(argumento)
        }
    
    }
```


## Servicios

Los servicios permiten a Angular trabajar de forma muy completa sin tener que recurrir a librerias de terceros para todo. Basicamente permiten trabajar con patron Redux sin Redux.


Se declaran dentro de providers

```ts


    @NgModule({
    declarations: [
        
    
        MainPageComponent,
                PersonajesComponent,
                AgregarComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        DbzService
    ]
    })
    export class DbzModule { }

```

Se crean como injectables : 

```ts

    @Injectable()
    export class DbzService{
        constructor(){
            console.log('Servicio iniciado')
        }
    }
    

    // Inyectar 


    constructor(
        private dbzService: DbzService
    ){}

```